const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); // ✨ NOVO
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ================================
// 📦 ROTAS
// ================================
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // ✨ NOVO

// Rota de teste
app.get("/", (req, res) => {
  res.send("Backend rodando! 🚀");
});

// Servir arquivos estáticos (imagens)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================================
// 🚀 INICIAR SERVIDOR
// ================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`📁 Uploads: ${path.join(__dirname, "uploads")}`);
});