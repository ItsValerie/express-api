// import 'dotenv/config';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const db = require('./models');
const manufacturersRouter = require('./routes/manufacturer');
const phonesRouter = require('./routes/phone');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create server
app.listen(3000, function() {
  db.sequelize.sync();
});

// Endpoints
app.use('/', manufacturersRouter);
app.use('/', phonesRouter);
