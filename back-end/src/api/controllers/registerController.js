const service = require('../services/registerService');

const register = async (req, res) => {
  const payload = await service.register(req.body);

  res.status(201).json({ ...payload });
};

module.exports = {
  register,
};

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */
