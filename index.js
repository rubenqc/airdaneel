'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello R. Daneel !!');
});

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`-- app started: PORT:${port} --`);
});
