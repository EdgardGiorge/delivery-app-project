const { products } = require('../../database/models');

const getAllProducts = async () => {
  const getProducts = await products.findAll();
  return getProducts;
};

const getProductById = async (id) => {
  const getProduct = await products.findByPk(id);
  return getProduct;
};

const create = async (payload) => {
  const { dataValues } = await products.create(payload);
  return dataValues;
};

module.exports = { getAllProducts, getProductById, create };