const {
  sales,
  products,
  users,
  salesProducts,
} = require('../../database/models');

const getSalesByUser = async (userId) => {
  const salesUser = await sales.findAll({
    where: { userId },
    attributes: ['userId', 'sellerId', 'totalPrice', 'status', 'saleDate', 'id'],
  });

  return salesUser;
};

const sumTotalValueProduct = (productsArray) => {
  const productsWithSumTotal = productsArray.map(
    ({ price, salesProducts: product, name }) => {
      const { quantity } = product;
      const totalPrice = (quantity * price).toFixed(2);
      return { name, price, quantity, totalPrice };
    },
  );

  return productsWithSumTotal;
};

const getSaleById = async ({ userId, saleId }) => {
  const sale = await sales.findOne({
    where: { userId, id: saleId },
    include: [
      {
        model: products,
        as: 'products',
        attributes: ['name', 'price'],
      },
      { model: users, as: 'seller' },
    ],
  });

  const { products: productsArray } = sale;

  return { ...sale.dataValues, products: sumTotalValueProduct(productsArray), sale };
};

const createSale = async (userId, sale) => {
  const { id: saleId } = await sales.create({
    ...sale.infos,
    userId,
  });

  const saleProductsarray = sale.products.map(({ id: productId, quantity }) =>
    ({ productId, quantity, saleId }));

  await salesProducts.bulkCreate(saleProductsarray);
  return { sale, status: 'created', saleId };
};

const getSellers = async () => {
  const sellers = await users.findAll({
    where: { role: 'seller' },
  });
  return sellers;
};

const updateSale = async ({ userId, saleId }, status) => {
  const saleUpdated = await sales.update({
    status,
  }, { where: { userId, id: saleId } });

  return saleUpdated;
};

module.exports = {
  getSalesByUser,
  getSaleById,
  createSale,
  getSellers,
  updateSale,
};
