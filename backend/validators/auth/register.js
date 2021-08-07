const { body } = require("express-validator");

exports.rules = (() => {
    return [
        body('firstName').notEmpty(),
        body('lastName').notEmpty(),
        body('gender').notEmpty(),
        body('email').notEmpty(),
        body('password').isLength({ min: 5 })
    ];
})();