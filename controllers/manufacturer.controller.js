const Manufacturer = require('../models').Manufacturer;

module.exports = {
   delete(req, res) {
    return Manufacturer
      .findByPk(req.params.id)
      .then(manufacturer => {
        if (!manufacturer) {
          return res.status(400).send({
            message: 'Manufacturer Not Found',
          });
        }
        return manufacturer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
