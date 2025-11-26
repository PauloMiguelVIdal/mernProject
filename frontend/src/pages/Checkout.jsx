import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Chip,
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';


const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tempCep, setTempCep] = useState('');

  // Dados do formulário
  const [shippingData, setShippingData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

// melhorenvio.calculoDeFretesPorProdutos({
//   Authorization: `Bearer ${MELHOR_ENVIO_TOKEN}`,
//   'User-Agent': 'Loja Online (paulo2.0miguel@gmail.com)'
// })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));





  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [errors, setErrors] = useState({});

  // Estados para frete
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [loadingShipping, setLoadingShipping] = useState(false);
  const [shippingError, setShippingError] = useState('');

  const steps = ['Cálculo de Frete', 'Dados de Entrega', 'Pagamento', 'Confirmação'];

  useEffect(() => {
    // Verificar autenticação
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    // Carregar carrinho
    loadCart();

    // Carregar dados do usuário
    loadUserData();
  }, []);

  const loadCart = () => {
    try {
      const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
      if (cartData.length === 0) {
        navigate('/cart');
      }
      setCart(cartData);
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
      navigate('/cart');
    }
  };

  const loadUserData = () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      setShippingData(prev => ({
        ...prev,
        nome: userData.name?.firstname 
          ? `${userData.name.firstname} ${userData.name.lastname || ''}`.trim()
          : userData.username || '',
        email: userData.email || '',
      }));
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((acc, item) => {
      const preco = Number(item.preco) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + (preco * quantity);
    }, 0);

    const shippingCost = selectedShipping ? Number(selectedShipping.price) : 0;
    return subtotal + shippingCost;
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => {
      const preco = Number(item.preco) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + (preco * quantity);
    }, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro do campo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCalculateShipping = () => {
    const cleanCep = tempCep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      setShippingError('Por favor, digite um CEP válido com 8 dígitos');
      return;
    }
    
    calculateShipping(cleanCep);
  };

  const calculateShipping = async (cep) => {
    setLoadingShipping(true);
    setShippingError('');
    setShippingOptions([]);
    setSelectedShipping(null);

    try {
      // Calcular dimensões do pacote baseado nos produtos
      const packageDimensions = calculatePackageDimensions();

      console.log('🚀 Enviando requisição para backend:', {
        cep,
        packageDimensions
      });

      // Chamar API do backend (não do Melhor Envio diretamente)
      const response = await fetch('http://localhost:5000/api/shipping/calculate-shipping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cep: cep,
          packageDimensions: packageDimensions
        })
      });

      console.log('📡 Status da resposta:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Erro na resposta:', errorData);
        throw new Error(errorData.error || 'Erro ao calcular frete');
      }

      const options = await response.json();
      console.log('✅ Opções de frete recebidas:', options);

      if (options && options.length > 0) {
        setShippingOptions(options);
        // Selecionar a opção mais barata por padrão
        setSelectedShipping(options[0]);
      } else {
        setShippingError('Não foi possível calcular o frete para este CEP.');
      }
    } catch (error) {
      console.error('💥 Erro ao calcular frete:', error);
      setShippingError(error.message || 'Erro ao calcular frete. Verifique o CEP e tente novamente.');
    } finally {
      setLoadingShipping(false);
    }
  };


  const calculatePackageDimensions = () => {
    // Calcular peso total
    const totalWeight = cart.reduce((acc, item) => {
      // Peso estimado por produto (em kg)
      const weightPerItem = 0.5; // Ajustado para 0.5kg por item
      return acc + (weightPerItem * item.quantity);
    }, 0);

    // Dimensões MÍNIMAS exigidas pelo Melhor Envio:
    // Altura: mín 2cm, máx 100cm
    // Largura: mín 11cm, máx 100cm  
    // Comprimento: mín 16cm, máx 100cm
    // Peso: mín 0.3kg, máx 30kg
    return {
      height: Math.max(5, 10),      // Mínimo 2cm, usando 5cm
      width: Math.max(15, 20),      // Mínimo 11cm, usando 15cm
      length: Math.max(20, 30),     // Mínimo 16cm, usando 20cm
      weight: Math.max(totalWeight, 0.5) // Peso mínimo de 0.5kg
    };
  };

  const validateShippingData = () => {
    const newErrors = {};

    if (!shippingData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!shippingData.email.trim()) newErrors.email = 'Email é obrigatório';
    if (!shippingData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!shippingData.cep.trim()) newErrors.cep = 'CEP é obrigatório';
    if (!shippingData.endereco.trim()) newErrors.endereco = 'Endereço é obrigatório';
    if (!shippingData.numero.trim()) newErrors.numero = 'Número é obrigatório';
    if (!shippingData.bairro.trim()) newErrors.bairro = 'Bairro é obrigatório';
    if (!shippingData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória';
    if (!shippingData.estado.trim()) newErrors.estado = 'Estado é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (activeStep === 0) {
      // Validar se frete foi selecionado
      if (!selectedShipping) {
        setShippingError('Por favor, calcule e selecione uma opção de frete');
        return;
      }
      // Copiar CEP para os dados de entrega
      setShippingData(prev => ({ ...prev, cep: tempCep }));
    }
    
    if (activeStep === 1) {
      // Validar dados de entrega
      if (!validateShippingData()) {
        return;
      }
    }
    
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleFinishOrder = async () => {
    setLoading(true);

    // Simular processamento do pedido
    setTimeout(() => {
      // Limpar carrinho
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated'));
      
      setLoading(false);
      setActiveStep(prev => prev + 1);
    }, 2000);
  };
  // Se pedido foi finalizado
  if (activeStep === 3) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #fce4ec, #f3e5f5, #fce4ec)' 
      }}>
        <Navbar />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Card sx={{ 
            textAlign: 'center', 
            p: 6,
            border: '2px solid #4caf50',
            boxShadow: '0 4px 20px rgba(76, 175, 80, 0.2)',
          }}>
            <CheckCircleIcon sx={{ fontSize: 100, color: '#4caf50', mb: 3 }} />
            <Typography variant="h4" fontWeight="bold" color="#4caf50" gutterBottom>
              Parabéns, pedido Realizado com Sucesso!
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Você receberá um email de confirmação em breve.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              sx={{
                background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': { 
                  background: 'linear-gradient(135deg, #d81b60, #8e24aa)',
                },
              }}
            >
              Voltar para Loja
            </Button>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #fce4ec, #f3e5f5, #fce4ec)' 
    }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Cabeçalho */}
        <Box 
          sx={{ 
            mb: 4,
            background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
            borderRadius: 3,
            p: 3,
            boxShadow: '0 4px 20px rgba(236, 64, 122, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ShoppingBagIcon sx={{ fontSize: 40, color: 'white' }} />
            <Box>
              <Typography variant="h4" fontWeight="bold" color="white">
                Finalizar Compra
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Complete seu pedido
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Stepper */}
        <Card sx={{ mb: 4, p: 3 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Card>

        <Grid container spacing={3}>
          {/* Formulário */}
          <Grid item xs={12} md={8}>
            <Card sx={{ 
              p: 3,
              border: '2px solid #f8bbd0',
              boxShadow: '0 4px 12px rgba(236, 64, 122, 0.15)',
            }}>
              {/* Passo 1: Dados de Entrega */}
              {activeStep === 0 && (
  <Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
      <LocalShippingIcon sx={{ color: '#ec407a', fontSize: 28 }} />
      <Typography variant="h6" fontWeight="bold" color="#424242">
        Calcular Frete
      </Typography>
    </Box>

    <Alert severity="info" sx={{ mb: 3 }}>
      Digite seu CEP para calcular as opções de frete disponíveis
    </Alert>

    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="CEP"
        value={tempCep}
        onChange={(e) => setTempCep(e.target.value)}
        placeholder="00000-000"
        inputProps={{ maxLength: 9 }}
        sx={inputStyles}
      />
      <Button
        variant="contained"
        onClick={handleCalculateShipping}
        disabled={loadingShipping}
        sx={{
          background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
          color: 'white',
          fontWeight: 'bold',
          px: 4,
          whiteSpace: 'nowrap',
          '&:hover': { 
            background: 'linear-gradient(135deg, #d81b60, #8e24aa)',
          },
        }}
      >
        Calcular
      </Button>
    </Box>

    {/* Opções de Frete */}
    {loadingShipping && (
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <CircularProgress sx={{ color: '#ec407a' }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Calculando frete...
        </Typography>
      </Box>
    )}

    {shippingError && (
      <Alert severity="error" sx={{ mt: 3 }}>
        {shippingError}
      </Alert>
    )}

    {shippingOptions.length > 0 && (
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#424242" gutterBottom>
          Escolha a forma de entrega:
        </Typography>
        
        <RadioGroup
          value={selectedShipping?.id}
          onChange={(e) => {
            const option = shippingOptions.find(opt => opt.id === Number(e.target.value));
            setSelectedShipping(option);
            setShippingError(''); // Limpar erro ao selecionar
          }}
        >
          {shippingOptions.map((option) => (
            <Box 
              key={option.id}
              sx={{ 
                p: 2, 
                mb: 2, 
                border: '2px solid',
                borderColor: selectedShipping?.id === option.id ? '#ec407a' : '#f8bbd0',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: '#ec407a',
                  backgroundColor: '#fce4ec',
                }
              }}
            >
              <FormControlLabel
                value={option.id}
                control={<Radio sx={{ color: '#ec407a', '&.Mui-checked': { color: '#ec407a' } }} />}
                label={
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography fontWeight="bold" color="#424242">
                          {option.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Entrega em até {option.deliveryTime} dias úteis
                        </Typography>
                      </Box>
                      <Chip 
                        label={`R$ ${option.price.toFixed(2)}`}
                        sx={{ 
                          background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>
                  </Box>
                }
                sx={{ width: '100%', m: 0 }}
              />
            </Box>
          ))}
        </RadioGroup>
      </Box>
    )}
  </Box>
)}
              {activeStep === 1 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <LocalShippingIcon sx={{ color: '#ec407a', fontSize: 28 }} />
                    <Typography variant="h6" fontWeight="bold" color="#424242">
                      Dados de Entrega
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Nome Completo"
                        name="nome"
                        value={shippingData.nome}
                        onChange={handleInputChange}
                        error={!!errors.nome}
                        helperText={errors.nome}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={shippingData.email}
                        onChange={handleInputChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Telefone"
                        name="telefone"
                        value={shippingData.telefone}
                        onChange={handleInputChange}
                        error={!!errors.telefone}
                        helperText={errors.telefone}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="CEP"
                        name="cep"
                        value={shippingData.cep}
                        onChange={handleInputChange}
                        error={!!errors.cep}
                        helperText={errors.cep}
                        placeholder="00000-000"
                        inputProps={{ maxLength: 9 }}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        fullWidth
                        label="Endereço"
                        name="endereco"
                        value={shippingData.endereco}
                        onChange={handleInputChange}
                        error={!!errors.endereco}
                        helperText={errors.endereco}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Número"
                        name="numero"
                        value={shippingData.numero}
                        onChange={handleInputChange}
                        error={!!errors.numero}
                        helperText={errors.numero}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        fullWidth
                        label="Complemento"
                        name="complemento"
                        value={shippingData.complemento}
                        onChange={handleInputChange}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Bairro"
                        name="bairro"
                        value={shippingData.bairro}
                        onChange={handleInputChange}
                        error={!!errors.bairro}
                        helperText={errors.bairro}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Cidade"
                        name="cidade"
                        value={shippingData.cidade}
                        onChange={handleInputChange}
                        error={!!errors.cidade}
                        helperText={errors.cidade}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <TextField
                        fullWidth
                        label="UF"
                        name="estado"
                        value={shippingData.estado}
                        onChange={handleInputChange}
                        error={!!errors.estado}
                        helperText={errors.estado}
                        inputProps={{ maxLength: 2 }}
                        sx={inputStyles}
                      />
                    </Grid>
                  </Grid>

                  {/* Opções de Frete */}
                  {loadingShipping && (
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                      <CircularProgress sx={{ color: '#ec407a' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Calculando frete...
                      </Typography>
                    </Box>
                  )}

                  {shippingError && (
                    <Alert severity="error" sx={{ mt: 3 }}>
                      {shippingError}
                    </Alert>
                  )}

                  {shippingOptions.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="subtitle1" fontWeight="bold" color="#424242" gutterBottom>
                        Escolha a forma de entrega:
                      </Typography>
                      
                      <RadioGroup
                        value={selectedShipping?.id}
                        onChange={(e) => {
                          const option = shippingOptions.find(opt => opt.id === Number(e.target.value));
                          setSelectedShipping(option);
                        }}
                      >
                        {shippingOptions.map((option) => (
                          <Box 
                            key={option.id}
                            sx={{ 
                              p: 2, 
                              mb: 2, 
                              border: '2px solid',
                              borderColor: selectedShipping?.id === option.id ? '#ec407a' : '#f8bbd0',
                              borderRadius: 2,
                              cursor: 'pointer',
                              transition: 'all 0.3s',
                              '&:hover': {
                                borderColor: '#ec407a',
                                backgroundColor: '#fce4ec',
                              }
                            }}
                          >
                            <FormControlLabel
                              value={option.id}
                              control={<Radio sx={{ color: '#ec407a', '&.Mui-checked': { color: '#ec407a' } }} />}
                              label={
                                <Box sx={{ width: '100%' }}>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                      <Typography fontWeight="bold" color="#424242">
                                        {option.company}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary">
                                        Entrega em até {option.deliveryTime} dias úteis
                                      </Typography>
                                    </Box>
                                    <Chip 
                                      label={`R$ ${option.price.toFixed(2)}`}
                                      sx={{ 
                                        background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
                                        color: 'white',
                                        fontWeight: 'bold'
                                      }}
                                    />
                                  </Box>
                                </Box>
                              }
                              sx={{ width: '100%', m: 0 }}
                            />
                          </Box>
                        ))}
                      </RadioGroup>
                    </Box>
                  )}
                </Box>
              )}

              {/* Passo 2: Pagamento */}
              {activeStep === 2 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <PaymentIcon sx={{ color: '#ec407a', fontSize: 28 }} />
                    <Typography variant="h6" fontWeight="bold" color="#424242">
                      Forma de Pagamento
                    </Typography>
                  </Box>

                  <FormControl component="fieldset">
                    <RadioGroup
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <Box sx={{ 
                        p: 2, 
                        mb: 2, 
                        border: '2px solid',
                        borderColor: paymentMethod === 'pix' ? '#ec407a' : '#f8bbd0',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#ec407a',
                          backgroundColor: '#fce4ec',
                        }
                      }}>
                        <FormControlLabel
                          value="pix"
                          control={<Radio sx={{ color: '#ec407a', '&.Mui-checked': { color: '#ec407a' } }} />}
                          label={
                            <Box>
                              <Typography fontWeight="bold" color="#424242">PIX</Typography>
                              <Typography variant="body2" color="text.secondary">
                                Aprovação instantânea
                              </Typography>
                            </Box>
                          }
                        />
                      </Box>

                      <Box sx={{ 
                        p: 2, 
                        mb: 2,
                        border: '2px solid',
                        borderColor: paymentMethod === 'cartao' ? '#ec407a' : '#f8bbd0',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#ec407a',
                          backgroundColor: '#fce4ec',
                        }
                      }}>
                        <FormControlLabel
                          value="cartao"
                          control={<Radio sx={{ color: '#ec407a', '&.Mui-checked': { color: '#ec407a' } }} />}
                          label={
                            <Box>
                              <Typography fontWeight="bold" color="#424242">Cartão de Crédito</Typography>
                              <Typography variant="body2" color="text.secondary">
                                Parcelamento em até 12x
                              </Typography>
                            </Box>
                          }
                        />
                      </Box>

                      <Box sx={{ 
                        p: 2,
                        border: '2px solid',
                        borderColor: paymentMethod === 'boleto' ? '#ec407a' : '#f8bbd0',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#ec407a',
                          backgroundColor: '#fce4ec',
                        }
                      }}>
                        <FormControlLabel
                          value="boleto"
                          control={<Radio sx={{ color: '#ec407a', '&.Mui-checked': { color: '#ec407a' } }} />}
                          label={
                            <Box>
                              <Typography fontWeight="bold" color="#424242">Boleto Bancário</Typography>
                              <Typography variant="body2" color="text.secondary">
                                Vencimento em 3 dias úteis
                              </Typography>
                            </Box>
                          }
                        />
                      </Box>
                    </RadioGroup>
                  </FormControl>
                </Box>
              )}

              {/* Passo 3: Confirmação */}
              {activeStep === 3 && (
                <Box>
                  <Typography variant="h6" fontWeight="bold" color="#424242" gutterBottom>
                    Revise seu Pedido
                  </Typography>

                  <Alert severity="info" sx={{ mb: 3 }}>
                    Confirme os dados antes de finalizar
                  </Alert>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="#ab47bc" fontWeight="bold" gutterBottom>
                      Dados de Entrega:
                    </Typography>
                    <Typography variant="body2" color="#424242">
                      {shippingData.nome}<br />
                      {shippingData.endereco}, {shippingData.numero}
                      {shippingData.complemento && ` - ${shippingData.complemento}`}<br />
                      {shippingData.bairro}, {shippingData.cidade} - {shippingData.estado}<br />
                      CEP: {shippingData.cep}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="#ab47bc" fontWeight="bold" gutterBottom>
                      Frete Selecionado:
                    </Typography>
                    {selectedShipping && (
                      <Box sx={{ 
                        p: 2, 
                        border: '2px solid #f8bbd0', 
                        borderRadius: 2,
                        backgroundColor: '#fce4ec'
                      }}>
                        <Typography variant="body2" color="#424242" fontWeight="bold">
                          {selectedShipping.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Entrega em até {selectedShipping.deliveryTime} dias úteis
                        </Typography>
                        <Typography variant="body2" color="#ec407a" fontWeight="bold">
                          R$ {selectedShipping.price.toFixed(2)}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="#ab47bc" fontWeight="bold" gutterBottom>
                      Forma de Pagamento:
                    </Typography>
                    <Typography variant="body2" color="#424242">
                      {paymentMethod === 'pix' && 'PIX'}
                      {paymentMethod === 'cartao' && 'Cartão de Crédito'}
                      {paymentMethod === 'boleto' && 'Boleto Bancário'}
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Botões de Navegação */}
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                {activeStep > 0 && (
                  <Button
                    onClick={handleBack}
                    variant="outlined"
                    sx={{
                      borderColor: '#ab47bc',
                      color: '#ab47bc',
                      borderWidth: 2,
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#ab47bc',
                        color: 'white',
                        borderWidth: 2,
                      }
                    }}
                  >
                    Voltar
                  </Button>
                )}
                
                {activeStep < 3 ? (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #d81b60, #8e24aa)',
                      },
                    }}
                  >
                    Continuar
                  </Button>
                ) : (
                  <Button
                    onClick={handleFinishOrder}
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{
                      background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #388e3c, #4caf50)',
                      },
                    }}
                  >
                    {loading ? 'Processando...' : 'Finalizar Pedido'}
                  </Button>
                )}
              </Box>
            </Card>
          </Grid>

          {/* Resumo do Pedido */}
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                position: 'sticky', 
                top: 20,
                border: '2px solid #e1bee7',
                boxShadow: '0 4px 20px rgba(171, 71, 188, 0.2)',
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(135deg, #ab47bc, #ec407a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Resumo do Pedido
                </Typography>

                <Divider sx={{ my: 2, borderColor: '#e1bee7' }} />

                {/* Itens */}
                <Box sx={{ mb: 2 }}>
                  {cart.map((item, index) => (
                    <Box key={index} sx={{ mb: 1.5 }}>
                      <Typography variant="body2" color="#424242" fontWeight="600">
                        {item.nome} ({item.size})
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.quantity}x R$ {Number(item.preco).toFixed(2)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2, borderColor: '#e1bee7' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography color="#424242">Subtotal:</Typography>
                  <Typography fontWeight="600" color="#ab47bc">
                    R$ {calculateSubtotal().toFixed(2)}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography color="#424242">Frete:</Typography>
                  {selectedShipping ? (
                    <Typography fontWeight="600" color="#ec407a">
                      R$ {selectedShipping.price.toFixed(2)}
                    </Typography>
                  ) : (
                    <Typography fontWeight="600" sx={{ color: '#9e9e9e' }}>
                      A calcular
                    </Typography>
                  )}
                </Box>

                <Divider sx={{ my: 2, borderColor: '#e1bee7' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" fontWeight="bold" color="#424242">
                    Total:
                  </Typography>
                  <Typography 
                    variant="h6" 
                    fontWeight="bold"
                    sx={{ color: '#ec407a' }}
                  >
                    R$ {calculateTotal().toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const inputStyles = {
  "& .MuiInputLabel-root": {
    color: "#9c27b0",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ec407a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f8bbd0",
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "#ec407a",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ec407a",
      borderWidth: 2,
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "#424242",
  },
};

export default Checkout;