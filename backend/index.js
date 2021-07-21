const express = require('express');

const app = express();
const config = require('./config/app');

app.get('/', (req, res) => {
    return res.send('Home');
});

app.get('/login', (req, res) => {
    return res.send('Login');
});

const port = config.appPort || 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})
