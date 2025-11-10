const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateCart,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

// ================================
// 🔓 Rotas PÚBLICAS (sem autenticação)
// ================================

// POST /api/users/register → Registrar novo usuário
router.post("/register", registerUser);

// POST /api/users/login → Fazer login
router.post("/login", loginUser);

// ================================
// 🔒 Rotas PRIVADAS (com autenticação)
// ================================

// GET /api/users/profile → Buscar perfil do usuário logado
router.get("/profile", authMiddleware, getUserProfile);

// PUT /api/users/cart → Atualizar carrinho
router.put("/cart", authMiddleware, updateCart);

module.exports = router;