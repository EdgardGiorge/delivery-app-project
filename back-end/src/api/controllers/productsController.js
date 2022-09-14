const ProductsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const products = await ProductsService.getAllProducts();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsService.getProductById(id);

  if (!product) return res.status(404).json({ message: 'Not Found.' });

  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const product = await ProductsService.create(req.body);
  return res.status(201).json(product);
};

module.exports = { getAllProducts, getProductById, createProduct };

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */