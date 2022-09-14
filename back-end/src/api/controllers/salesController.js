const salesService = require('../services/salesService');

const getSalesByUser = async (_req, res) => {
  const { userInfo } = res.locals;
  const { id } = userInfo;
  const sales = await salesService.getSalesByUser(id);

  return res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id: saleId } = req.params;
  const { userInfo } = res.locals;
  const { id } = userInfo;

  // id de algum lugar do res depois de pegar do token
  const userId = id;

  const sale = await salesService.getSaleById({ userId, saleId });
  return res.status(200).json(sale);
};

const createSale = async (req, res) => {
  const { id: userId } = res.locals.userInfo;

  const { sale } = req.body;

  const saleCreated = await salesService.createSale(userId, sale);
  console.log(saleCreated);
  return res.status(201).json(saleCreated);
};

const getSellers = async (_req, res) => {
  const sellers = await salesService.getSellers();
  return res.status(200).json(sellers);
};

const updateSale = async (req, res) => {
  const { id: saleId } = req.params;
  const { status } = req.body;
  const { id: userId } = res.locals.userInfo;

  const saleUpdated = await salesService.updateSale({ userId, saleId }, status);
  return res.status(200).json(saleUpdated);
};

module.exports = {
  getSalesByUser,
  getSaleById,
  createSale,
  getSellers,
  updateSale,
};

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */
