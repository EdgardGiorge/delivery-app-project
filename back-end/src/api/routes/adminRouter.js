const express = require('express');
const ProductsController = require('../controllers/productsController');
const UserAdminController = require('../controllers/user.adminController');
const { registerValidation, createValidation } = require('../middlewares');

const router = express.Router();

router.post('/products', createValidation, ProductsController.createProduct);
router.post('/manage', registerValidation, UserAdminController.createUserController);
router.get('/manage', UserAdminController.getAllUsers);

module.exports = router;