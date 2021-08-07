const { body } = require("express-validator");

exports.rules = (() => {
    return [
        body('email').notEmpty(),
        body('password').isLength({ min: 5 })
    ];
})();