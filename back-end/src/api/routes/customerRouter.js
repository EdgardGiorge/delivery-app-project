const express = require('express');
const { authenticateToken } = require('../../utils/jwt');
const { getAllProducts, getProductById } = require('../controllers/productsController');
const {
  getSalesByUser,
  getSaleById,
  createSale,
  getSellers,
  updateSale,
} = require('../controllers/salesController');

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

router.get('/sales', authenticateToken, getSalesByUser);

router.get('/sales/:id', authenticateToken, getSaleById);

router.post('/sales', authenticateToken, createSale);

router.get('/sellers', getSellers);

router.patch('/sales/:id', authenticateToken, updateSale);

module.exports = router;
