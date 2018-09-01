const express = require('express');
const main = express.Router();

main.get('/', (req, res) => {
  res.send('Express Demo App!');
});

module.exports = main;
