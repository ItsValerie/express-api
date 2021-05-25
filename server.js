require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const db = require('./models');
const passport = require('passport');
const manufacturerRouter = require('./routes/manufacturers');
const phoneRouter = require('./routes/phones');
const userRouter = require('./routes/users');

// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
require('./config/passport-config')(passport);

// Endpoints
app.use('/api/v1/', manufacturerRouter);
app.use('/api/v1/', phoneRouter);
app.use('/', userRouter);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

// Server
app.listen(process.env.PG_PORT, function() {
  db.sequelize.sync();
});
