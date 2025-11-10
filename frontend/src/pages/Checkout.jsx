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
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [errors, setErrors] = useState({});

  const steps = ['Dados de Entrega', 'Pagamento', 'Confirmação'];

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
              Pedido Realizado com Sucesso!
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
                </Box>
              )}

              {/* Passo 2: Pagamento */}
              {activeStep === 1 && (
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
              {activeStep === 2 && (
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
                
                {activeStep < 2 ? (
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
                    R$ {calculateTotal().toFixed(2)}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography color="#424242">Frete:</Typography>
                  <Typography fontWeight="600" sx={{ color: '#4caf50' }}>
                    Grátis
                  </Typography>
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