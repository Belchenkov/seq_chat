const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config/app');
const router = require('./router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

const port = config.appPort || 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})
