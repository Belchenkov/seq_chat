const express = require('express');

const app = express();
const config = require('./config/app');
const router = require('./router');

app.use(router);

const port = config.appPort || 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})
