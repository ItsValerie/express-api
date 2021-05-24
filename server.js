// import 'dotenv/config';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const db = require('./models');
const manufacturerRouter = require('./routes/manufacturer');
const phoneRouter = require('./routes/phone');
const userRouter = require('./routes/user');


// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoints
app.use('/', manufacturerRouter);
app.use('/', phoneRouter);
app.use('/', userRouter);

// Create server
app.listen(3000, function() {
  db.sequelize.sync();
});
