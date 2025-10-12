const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const {
  getProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");

// ================================
// 🔧 Configuração do Multer
// ================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // pasta onde a imagem será salva
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // renomeia com timestamp
  },
});

const upload = multer({ storage });

// ================================
// 📦 Rotas de produtos
// ================================

// GET /api/products → lista todos os produtos
router.get("/", getProducts);

// POST /api/products → cria produto + faz upload da imagem
router.post("/", upload.single("imagem"), createProduct);

// DELETE /api/products/:id → deleta produto pelo ID
router.delete("/:id", deleteProduct);

module.exports = router;
