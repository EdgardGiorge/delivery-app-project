const { PCPSchema } = require('../../utils/joiSchemas/productsCreatePayloadSchema');

const createValidation = (req, _res, next) => {
  const { error } = PCPSchema.validate(req.body);

  if (error) return next(error);

  return next();
};

module.exports = createValidation;

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */