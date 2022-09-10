/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

const express = require('express');
const customerRouter = require('./customerRouter');

const loginRouter = require('./loginRouter');

const sellerRouter = require('./sellerRouter');

const adminRouter = require('./adminRouter');

const registerRouter = require('./registerRouter');

const { authenticateToken } = require('../../utils/jwt');

const middlewares = require('../middlewares');

const route = express.Router();

route.use('/customer', customerRouter);

route.use('/login', loginRouter);

route.use('/admin', authenticateToken, adminRouter);

route.use('/seller/sales', authenticateToken, sellerRouter);

route.use('/register', middlewares.verifyRegister, registerRouter);

module.exports = route;