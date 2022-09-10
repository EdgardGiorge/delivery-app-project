const { PCPSchema } = require('../../utils/joiSchemas/productsCreatePayloadSchema');

const createValidation = (req, _res, next) => {
  const { error } = PCPSchema.validate(req.body);

  if (error) return next(error);

  return next();
};

module.exports = createValidation;