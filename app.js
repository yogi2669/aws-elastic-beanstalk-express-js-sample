const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Yogesh,welcome to Cprime.This is updated version.you should finish ur project by tomorrow.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
