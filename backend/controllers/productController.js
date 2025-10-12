const Product = require("../models/product");

// Buscar todos os produtos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
};

// Criar produto com imagem
const createProduct = async (req, res) => {
  try {
    const { nome, preco, descricao } = req.body;
   const imagem = req.file ? `/uploads/${req.file.filename}` : null;

    const product = new Product({
      nome,
      preco,
      descricao,
      imagem,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar produto" });
  }
};

// Deletar produto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Produto deletado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar produto" });
  }
};

module.exports = { getProducts, createProduct, deleteProduct };
