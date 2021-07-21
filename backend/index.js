const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Home');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})
