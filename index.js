'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello R. Daneel !!');
});

app.listen(3000, () => {
  console.log('-- app started --');
});
