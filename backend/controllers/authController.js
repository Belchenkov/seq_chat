const HttpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');

const User = require('../models').User;

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res
                .status(HttpStatus.NOT_FOUND)
                .json({
                    status: false,
                    message: 'User not found!'
                });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res
                .status(HttpStatus.UNAUTHORIZED)
                .json({
                    status: false,
                    message: 'Incorrect user or password'
                });
        }

        return res
            .status(HttpStatus.OK)
            .json({
                status: true,
                user
            });
    } catch (err) {
        return res
            .status(HttpStatus.BAD_REQUEST)
            .json({
                status: false,
                message: err.message
            });
    }

};

exports.register = async (req, res) => {};