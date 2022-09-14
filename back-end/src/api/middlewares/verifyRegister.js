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

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */
