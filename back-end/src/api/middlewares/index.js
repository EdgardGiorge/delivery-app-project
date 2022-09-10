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