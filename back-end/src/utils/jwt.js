const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();

// https://stackoverflow.com/questions/9874382/whats-the-difference-between-process-cwd-vs-dirname
const pathSourceProject = process.cwd();

// https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-node-js-2/
const SECRET = fs.readFileSync(`${pathSourceProject}/jwt.evaluation.key`, 'utf-8');
const { TOKEN_NOT_FOUND, INVALID_TOKEN } = require('./messages');

const jwtConfig = {
  algorithm: 'HS256',
};
// const decodeToken = (token) => jwt.decode(token);

const generateToken = (payload) => jwt.sign({ ...payload }, SECRET, jwtConfig);

const authenticateToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    throw TOKEN_NOT_FOUND;
  }
  try {
    const decoded = jwt.verify(token, SECRET, jwtConfig);
    res.locals.userInfo = decoded;
    next();
  } catch (e) {
    throw INVALID_TOKEN;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
  // decodeToken,
};
