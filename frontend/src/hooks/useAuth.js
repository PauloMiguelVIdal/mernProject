import { useState, useEffect } from 'react';

// Hook customizado para gerenciar autenticação
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  // Verificar se usuário está autenticado
  const checkAuth = () => {
    try {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('user');

      if (token && userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = (token, userData) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Atualizar dados do usuário
  const updateUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    updateUser,
    checkAuth,
  };
};

// Hook para gerenciar carrinho
export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    loadCart();
    
    // Listener para atualizar carrinho quando houver mudanças
    const handleCartUpdate = () => {
      loadCart();
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  // Carregar carrinho do localStorage
  const loadCart = () => {
    try {
      const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(cartData);
      
      // Calcular total de itens
      const total = cartData.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(total);
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
      setCart([]);
      setCartCount(0);
    }
  };

  // Adicionar item ao carrinho
  const addToCart = (item) => {
    try {
      const currentCart = [...cart];
      const existingIndex = currentCart.findIndex(
        i => i.id === item.id && i.size === item.size
      );

      if (existingIndex > -1) {
        currentCart[existingIndex].quantity += 1;
      } else {
        currentCart.push({ ...item, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(currentCart));
      loadCart();
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  // Remover item do carrinho
  const removeFromCart = (itemId, size) => {
    try {
      const updatedCart = cart.filter(
        item => !(item.id === itemId && item.size === size)
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      loadCart();
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (error) {
      console.error('Erro ao remover do carrinho:', error);
    }
  };

  // Atualizar quantidade
  const updateQuantity = (itemId, size, quantity) => {
    try {
      const updatedCart = cart.map(item => {
        if (item.id === itemId && item.size === size) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      loadCart();
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
    }
  };

  // Limpar carrinho
  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setCartCount(0);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Calcular total
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + (item.preco * item.quantity), 0);
  };

  return {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    loadCart,
  };
};