const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();

const pathSourceProject = process.cwd();

const SECRET = fs.readFileSync(`${pathSourceProject}/jwt.evaluation.key`, 'utf-8');
const { TOKEN_NOT_FOUND, INVALID_TOKEN } = require('./messages');

const jwtConfig = {
  algorithm: 'HS256',
};

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
};
