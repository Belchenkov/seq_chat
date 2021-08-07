const { validationResult } = require("express-validator");
const HttpStatus = require("http-status-codes");

exports.validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(HttpStatus.UNPROCESSABLE_ENTITY)
            .json({
                status: false,
                errors
            });
    }

    next();
};