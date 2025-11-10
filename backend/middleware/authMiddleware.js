const jwt = require("jsonwebtoken");

// ================================
// 🔐 MIDDLEWARE DE AUTENTICAÇÃO
// ================================
const authMiddleware = (req, res, next) => {
  try {
    // Pegar token do header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ 
        message: "Acesso negado. Token não fornecido." 
      });
    }

    // Verificar token
    const decoded = jwt.verify(
      token, 
      process.env.JWT_SECRET || "seu_secret_jwt_aqui"
    );

    // Adicionar dados do usuário na requisição
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Erro na autenticação:", error);
    res.status(401).json({ 
      message: "Token inválido ou expirado" 
    });
  }
};

// ================================
// 👑 MIDDLEWARE DE ADMIN
// ================================
const adminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ 
      message: "Acesso negado. Requer privilégios de administrador." 
    });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };