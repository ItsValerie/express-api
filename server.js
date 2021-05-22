const express = require('express');
const app = express();

const db = require('./models');

app.listen(3000, function() {
  db.sequelize.sync();
});


const Manufacturer = db.Manufacturer;

app.post('/manufacturers', function (req, res) {
  Manufacturer.create({
    name: req.body.name,
    location: req.body.location
  })
  .then (function (manufacturer) {
    res.json(manufacturer);
  });
});


app.get('/manufacturers', function(req, res) {
  Manufacturer.findAll()
    .then(function (manufacturers) {
      res.json(manufacturers);
    });
});
