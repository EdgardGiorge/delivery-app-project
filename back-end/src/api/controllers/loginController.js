const { loginService } = require('../services/loginService');

const loginController = async (req, res, _next) => {
  const payload = await loginService(req.body);
  return res.status(200).json({ ...payload });
};

module.exports = {
  loginController,
};
