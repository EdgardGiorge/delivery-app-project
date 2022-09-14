const errorHandler = require('./errorHandler');
const registerValidation = require('./registerAdminValidation');
const createValidation = require('./productsCreateValidation');
const verifyRegister = require('./verifyRegister');

module.exports = {
  errorHandler,
  verifyRegister,
  registerValidation,
  createValidation,
};

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */