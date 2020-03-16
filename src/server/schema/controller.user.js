const joi = require('@hapi/joi');

const create = joi.object({
  firstName: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  lastName: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required()
});

module.exports = { create };
