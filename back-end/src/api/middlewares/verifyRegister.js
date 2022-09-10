const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'br'] } }).required(),
  password: Joi.string().min(6).required(),
});

const verifyRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);

  if (error) throw Object({ status: 422, message: error.message });

  next();
};

module.exports = verifyRegister;
