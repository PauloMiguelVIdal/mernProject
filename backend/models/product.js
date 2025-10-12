const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nome: { 
      type: String, 
      required: true 
    },
    preco: { 
      type: Number, 
      required: true 
    },
    qtdPequeno: { 
      type: Number, 
      required: true 
    },
    qtdMedio: { 
      type: Number, 
      required: true 
    },
    qtdGrande: { 
      type: Number, 
      required: true 
    },
    qtdGGrande: { 
      type: Number, 
      required: true 
    },
    descricao: { 
      type: String 
    },
    imagem: { 
      type: String, 
      required: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);