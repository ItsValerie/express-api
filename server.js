const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const db = require('./models');

// DO i need this?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create server
app.listen(3000, function() {
  db.sequelize.sync();
});



// ROUTES FOR MANUFACTURERS ENDPOINTS
const Manufacturer = db.Manufacturer;

// POST
app.post('/manufacturers', jsonParser, function (req, res, next) {
  const manufacturer = Manufacturer.create({
    name: req.body.name,
    location: req.body.location
  })
  if (!manufacturer) {
    return next(
      new Error(`Unsuccessful`, 404) // does this work?
    );
  };
  res.status(200).json({ success: true, data: req.body });
});

// GET
app.get('/manufacturers', function(req, res) {
  Manufacturer.findAll()
    .then(function (manufacturers) {
      res.json(manufacturers);
    });
});


// GET !!! handle error -not found-
app.get('/manufacturers/:id', function(req, res) {
  const manufacturer = Manufacturer.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function (manufacturer) {
       if (!manufacturer) {
            return 'Manufacturer not found';
        }
        return res.json(manufacturer);
    });
});

// DELETE manufacturers
// app.delete('manufacturers/:id', function(req, res) {
//    Manufacturer.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   return res.status(200).json({ success: true, message: "Deleted" });
// });


// TEST DELETE manufacturers
// app.delete('manufacturers/:id', function(req, res) {
//     Manufacturer.findOne({
//       where: {
//       id: req.params.id}
//     })
//       .then(manufacturer => {
//         if (!manufacturer) {
//           return res.status(400).send({
//             message: 'Manufacturer Not Found',
//           });
//         }
//         return manufacturer
//           .destroy()
//           .then(() => res.status(204).send())
//           .catch((error) => res.status(400).send(error));
//       })
//       .catch((error) => res.status(400).send(error));
//   });

// PUT manufacturers
// app.patch('manufacturers/:id', jsonParser, function(req, res) {
//   Manufacturer.update({
//     name: req.body.name,
//     location: req.body.location}, {
//       where: {
//       id: req.params.id
//     }
//    })
//   return res.status(200).json({ success: true, data: req.body });
// });

