import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    try {
      const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(cartData);
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = (itemId, size, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map(item => {
      if (item.id === itemId && item.size === size) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (itemId, size) => {
    const updatedCart = cart.filter(
      item => !(item.id === itemId && item.size === size)
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    if (window.confirm('Deseja realmente limpar todo o carrinho?')) {
      localStorage.removeItem('cart');
      setCart([]);
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const preco = Number(item.preco) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + (preco * quantity);
    }, 0);
  };

  const handleCheckout = () => {
    // Verificar se está logado
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      alert('⚠️ Faça login para finalizar a compra');
      navigate('/login');
      return;
    }

    // Ir para página de checkout
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <Container sx={{ py: 4, textAlign: 'center' }}>
          <Typography>Carregando carrinho...</Typography>
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
            <ShoppingCartIcon sx={{ fontSize: 40, color: 'white' }} />
            <Box>
              <Typography variant="h4" fontWeight="bold" color="white">
                Meu Carrinho
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {cart.length} {cart.length === 1 ? 'item' : 'itens'} no carrinho
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Carrinho Vazio */}
        {cart.length === 0 ? (
          <Card 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              border: '2px solid #f8bbd0',
              boxShadow: '0 4px 20px rgba(236, 64, 122, 0.15)',
            }}
          >
            <ShoppingCartIcon 
              sx={{ 
                fontSize: 100, 
                color: '#f8bbd0', 
                mb: 2 
              }} 
            />
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              Seu carrinho está vazio
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Adicione produtos para começar suas compras!
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
                  boxShadow: '0 6px 20px rgba(236, 64, 122, 0.4)',
                },
              }}
            >
              Ir para Loja
            </Button>
          </Card>
        ) : (
          <Grid container spacing={3}>
            {/* Lista de Itens */}
            <Grid item xs={12} md={8}>
              {cart.map((item) => (
                <Card 
                  key={`${item.id}-${item.size}`} 
                  sx={{ 
                    mb: 2,
                    border: '2px solid #f8bbd0',
                    boxShadow: '0 4px 12px rgba(236, 64, 122, 0.15)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: '#ec407a',
                      boxShadow: '0 6px 20px rgba(236, 64, 122, 0.25)',
                    }
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      {/* Imagem */}
                      <Grid item xs={3} sm={2}>
                        <img
                          src={`http://localhost:5000${item.imagem}`}
                          alt={item.nome}
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            objectFit: 'cover',
                            border: '3px solid #f8bbd0',
                          }}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150?text=Sem+Imagem';
                          }}
                        />
                      </Grid>

                      {/* Informações */}
                      <Grid item xs={9} sm={10}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Box>
                            <Typography variant="h6" fontWeight="600" color="#424242">
                              {item.nome}
                            </Typography>
                            <Typography 
                              sx={{ 
                                color: '#ab47bc', 
                                fontWeight: '500',
                                fontSize: '0.9rem',
                              }}
                            >
                              Tamanho: {item.size}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{ 
                                mt: 1, 
                                color: '#ec407a', 
                                fontWeight: 'bold' 
                              }}
                            >
                              R$ {Number(item.preco).toFixed(2)}
                            </Typography>
                          </Box>

                          {/* Botão Remover */}
                          <IconButton
                            onClick={() => removeItem(item.id, item.size)}
                            size="small"
                            sx={{
                              color: '#ec407a',
                              '&:hover': {
                                backgroundColor: '#fce4ec',
                              }
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>

                        {/* Controle de Quantidade */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: 1, flexWrap: 'wrap' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              sx={{
                                border: '2px solid #f8bbd0',
                                color: '#ec407a',
                                '&:hover': {
                                  backgroundColor: '#fce4ec',
                                  borderColor: '#ec407a',
                                }
                              }}
                            >
                              <RemoveIcon />
                            </IconButton>

                            <Typography
                              sx={{
                                px: 2,
                                py: 0.5,
                                border: '2px solid #f8bbd0',
                                borderRadius: 1,
                                minWidth: '50px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#ec407a',
                              }}
                            >
                              {item.quantity}
                            </Typography>

                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              sx={{
                                border: '2px solid #f8bbd0',
                                color: '#ec407a',
                                '&:hover': {
                                  backgroundColor: '#fce4ec',
                                  borderColor: '#ec407a',
                                }
                              }}
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>

                          <Typography 
                            variant="body2" 
                            sx={{ 
                              ml: { xs: 0, sm: 2 },
                              color: '#ab47bc',
                              fontWeight: '600',
                            }}
                          >
                            Subtotal: R$ {(Number(item.preco) * Number(item.quantity)).toFixed(2)}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}

              {/* Botão Limpar Carrinho */}
              <Button
                variant="outlined"
                onClick={clearCart}
                fullWidth
                sx={{ 
                  mt: 2,
                  borderColor: '#ec407a',
                  color: '#ec407a',
                  borderWidth: 2,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#ec407a',
                    color: 'white',
                    borderWidth: 2,
                  }
                }}
              >
                Limpar Carrinho
              </Button>
            </Grid>

            {/* Resumo */}
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

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
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

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleCheckout}
                    sx={{
                      background: 'linear-gradient(135deg, #ec407a, #ab47bc)',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                      boxShadow: '0 4px 12px rgba(236, 64, 122, 0.3)',
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #d81b60, #8e24aa)',
                        boxShadow: '0 6px 20px rgba(236, 64, 122, 0.4)',
                      },
                    }}
                  >
                    Finalizar Compra
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate('/')}
                    sx={{ 
                      mt: 2,
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
                    Continuar Comprando
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Cart;