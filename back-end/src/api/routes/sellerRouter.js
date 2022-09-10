const express = require('express');
const { getOrders, getOrderById } = require('../controllers/sellerController');

const router = express.Router();

router.get('/:id', getOrderById);

router.get('/', getOrders);

module.exports = router;