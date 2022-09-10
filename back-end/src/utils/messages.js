const TOKEN_NOT_FOUND = { status: 401, message: 'Campo token é obrigatorio.' };
const INVALID_TOKEN = { status: 401, message: 'Token inválido.' };
const USER_NOT_FOUND = { status: 404, message: 'Usuário não encontrado.' };
const ORDER_NOT_FOUND = { status: 404, message: 'Pedido não encontrado.' };
const USER_ALREADY_EXISTS = { status: 409, message: 'Usuário já cadastrado.' };
const USER_PASSWORD_INCORRET = { status: 422, message: 'Senha incorreta.' };

module.exports = {
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  USER_NOT_FOUND,
  ORDER_NOT_FOUND,
  USER_ALREADY_EXISTS,
  USER_PASSWORD_INCORRET,
};
