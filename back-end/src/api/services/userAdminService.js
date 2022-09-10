const { users } = require('../../database/models');
const { generateToken } = require('../../utils/jwt');
const { encode } = require('../../utils/md5');

const createUserService = async ({ name, email, password, role }) => {
  const findUser = await users.findOne({ where: { email } });

  if (findUser) {
    const e = new Error('User already registered');
    e.status = 409;
    throw e;
  }
  const { dataValues } = await users.create({
    name,
    email,
    password: encode(password),
    role,
  });

  const token = generateToken({
    id: dataValues.id, name: dataValues.name, email: dataValues.email, role: dataValues.role,
  });
  return { token };
};

const getAllUsers = () => users.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  createUserService,
  getAllUsers,
};