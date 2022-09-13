const service = require('../services/registerService');

const register = async (req, res) => {
  const payload = await service.register(req.body);

  res.status(201).json({ ...payload });
};

module.exports = {
  register,
};
