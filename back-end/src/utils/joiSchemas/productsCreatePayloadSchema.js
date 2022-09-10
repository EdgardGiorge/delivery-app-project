const Joi = require('joi');

const PCPSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().required(),
  urlImage: Joi.string().required(),
}).messages({
  'string.empty': '{{#label}} cannot be empty',
  'string.base': '{{#label}} should be a string',
  'string.min': '{{#label}} min 3 characters',
  'number.empty': '{{#label}} cannot be empty',
  'number.base': '{{#label}} should be a number',
  'any.required': '{{#label}} is required!!',
});

module.exports = { PCPSchema };
