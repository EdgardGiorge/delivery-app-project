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
