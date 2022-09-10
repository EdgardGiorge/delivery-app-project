const { sales, products } = require('../../database/models');
const { ORDER_NOT_FOUND } = require('../../utils/messages');

const getOrders = (sellerId) => sales.findAll({ where: { sellerId } });

const getOrderById = async (sellerId, id) => {
  const order = await sales.findOne({ 
    where: { sellerId, id },
    include: { model: products, as: 'products' },
  });

  if (!order) throw ORDER_NOT_FOUND;

  return order;
}; 

module.exports = {
  getOrders,
  getOrderById,
};
