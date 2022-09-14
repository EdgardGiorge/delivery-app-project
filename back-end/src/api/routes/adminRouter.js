const express = require('express');
const ProductsController = require('../controllers/productsController');
const UserAdminController = require('../controllers/userAdminController');
const { registerValidation, createValidation } = require('../middlewares');

const router = express.Router();

router.post('/products', createValidation, ProductsController.createProduct);
router.post('/manage', registerValidation, UserAdminController.createUserController);
router.get('/manage', UserAdminController.getAllUsers);

module.exports = router;

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */