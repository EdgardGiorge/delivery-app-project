const adminService = require('../services/userAdminService');

const createUserController = async (req, res) => {
  const { role } = res.locals.userInfo;
  if (role !== 'administrator') return res.status(401).json({ message: 'Unauthorized' });
  const payload = await adminService.createUserService(req.body);
  return res.status(201).json({ ...payload });
};

const getAllUsers = async (req, res) => {
  const users = await adminService.getAllUsers();

  return res.status(200).json(users);
};

module.exports = {
  createUserController,
  getAllUsers,
};

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */