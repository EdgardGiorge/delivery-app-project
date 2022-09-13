const service = require('../services/register.service');

const register = async (req, res) => {
  const payload = await service.register(req.body);

  res.status(201).json({ ...payload });
};

module.exports = {
  register,
};
