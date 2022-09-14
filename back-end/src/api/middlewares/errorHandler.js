const errorHandler = (error, _req, res, _next) => {
  res.status(error.status || 500).json({ message: error.message });
};

module.exports = errorHandler;

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */