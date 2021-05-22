const express = require('express');
const app = express();

const db = require('./models');

app.listen(3000, function() {
  db.sequelize.sync();
});

