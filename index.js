'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello R. Daneel !!');
});

app.listen(process.env.PORT, () => {
  console.log('-- app started --');
});
