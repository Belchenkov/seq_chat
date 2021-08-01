const router = require('express').Router();

router.get('/', (req, res) => {
    return res.send('Home');
});

router.use('/', require('./auth'));

module.exports = router;