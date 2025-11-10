import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente para proteger rotas que precisam de autenticação
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const authToken = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  // Se não estiver autenticado, redireciona para login
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  // Se requer admin e usuário não é admin, redireciona para home
  if (requireAdmin && !user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Se estiver autenticado (e for admin se necessário), renderiza o componente
  return children;
};

export default ProtectedRoute;