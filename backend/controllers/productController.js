const Product = require('../models/product');

// Buscar todos os produtos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // busca todos os produtos do MongoDB
    res.json(products); // retorna um array
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
};

// Criar produto
const createProduct = async (req, res) => {
  try {
    const { nome, preco, descricao } = req.body;
    const product = new Product({ nome, preco, descricao });
    await product.save(); // salva no MongoDB
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
};

// Deletar produto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Produto deletado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar produto' });
  }
};

module.exports = { getProducts, createProduct, deleteProduct };
