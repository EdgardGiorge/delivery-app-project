const { registerDTO } = require('../../utils/joiSchemas/userAdminValidation');

const registerValidation = (req, _res, next) => {
    const { error } = registerDTO.validate(req.body);

    if (error) return next(error);
    return next();
};

module.exports = registerValidation;