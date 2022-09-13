const { users } = require('../../database/models');
const { USER_ALREADY_EXISTS } = require('../../utils/messages');
const { generateToken } = require('../../utils/jwt');
const { encode } = require('../../utils/md5');

const register = async ({ name, email, password }) => {
  const user = await users.findOne({ where: { email } });

  if (user) throw USER_ALREADY_EXISTS;

  const newUser = await users.create({
      email, 
      password: encode(password),
      name,
      role: 'customer',
    });

    const token = generateToken({ 
      name: newUser.dataValues.name,
      email: newUser.dataValues.email,
      id: newUser.dataValues.id, 
    });

  return { name, email, role: newUser.role, token };
};

module.exports = {
  register,
};
