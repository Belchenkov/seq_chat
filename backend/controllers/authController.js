const HttpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('../config/app');
const User = require('../models').User;

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const secret = require('crypto')
            .randomBytes(64)
            .toString('hex');

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

        const userWithToken = generateToken(user.get({ raw: true }));

        return res
            .status(HttpStatus.OK)
            .json({
                status: true,
                user: userWithToken
            });
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({
                status: false,
                message: err.message
            });
    }
};

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const userWithToken = generateToken(user.get({ raw: true }));

        return res
            .status(HttpStatus.OK)
            .json({
                status: true,
                user: userWithToken
            });
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({
                status: false,
                message: err.message
            });
    }
};

const generateToken = user => {
    delete user.password;

    const token = jwt.sign(user, config.appKey, {
        expiresIn: 86400
    });

    return {
        ...user,
        ...{ token }
    }
};