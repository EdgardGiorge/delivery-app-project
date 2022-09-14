const service = require('../services/sellerService');

const getOrders = async (req, res) => {
  const orders = await service.getOrders(res.locals.userInfo.id);

  res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const order = await service.getOrderById(res.locals.userInfo.id, req.params.id);

  res.status(200).json(order);
};

module.exports = {
  getOrders,
  getOrderById,
};

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */