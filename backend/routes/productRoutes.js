const express = require('express');
const router = express.Router();
const { getProducts, createProduct, deleteProduct } = require('../controllers/productController');

// GET /api/products
router.get('/', getProducts);

// POST /api/products
router.post('/', createProduct);

// DELETE /api/products/:id
router.delete('/:id', deleteProduct);

module.exports = router;