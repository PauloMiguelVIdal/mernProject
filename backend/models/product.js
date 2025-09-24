const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);