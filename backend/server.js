const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); // ✨ NOVO
const shippingRoutes = require("./routes/shippingRoutes");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'https://mern-project-iota-three.vercel.app', // URL do seu frontend
  credentials: true
}));
app.use(express.json());

// ================================
// 📦 ROTAS
// ================================
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // ✨ NOVO
app.use("/api/shipping", shippingRoutes); 
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