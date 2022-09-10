const { users } = require('../../database/models');
const { generateToken } = require('../../utils/jwt');
const { encode } = require('../../utils/md5');
const { USER_NOT_FOUND, USER_PASSWORD_INCORRECT } = require('../../utils/messages');

const loginService = async ({ email, password }) => {
  const user = await users.findOne({ where: { email } });

  if (!user) {
    throw USER_NOT_FOUND;
  }

  if (user.dataValues.password !== encode(password)) { 
    throw USER_PASSWORD_INCORRECT;
  }

  const token = generateToken({ name: user.name, email, id: user.id, role: user.role });

  return { name: user.name, email, role: user.role, token };
};

module.exports = {
  loginService,
};
