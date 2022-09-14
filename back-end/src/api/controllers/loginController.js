const { loginService } = require('../services/loginService');

const loginController = async (req, res, _next) => {
  const payload = await loginService(req.body);
  return res.status(200).json({ ...payload });
};

module.exports = {
  loginController,
};

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */
