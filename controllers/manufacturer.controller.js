const Manufacturer = require('../models').Manufacturer;
const Phone = require('../models').Phone;

exports.createManufacturer = async (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).send({
      message: 'Please provide a name and location to create a manufacturer!',
    });
  }

  let manufacturerExists = await Manufacturer.findOne({
    where: {
      name,
    },
  });

  if (manufacturerExists) {
    return res.status(400).send({
      message: 'A manufacturer with this name already exists!',
    });
  }

  try {
    let newManufacturer = await Manufacturer.create({
      name,
      location,
    });
    return res.send(newManufacturer);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};


exports.getManufacturer = async (req, res) => {
  const { id } = req.params;

  const manufacturer = await Manufacturer.findOne({
    where: {
      id,
    },
  });

  if (!manufacturer) {
    return res.status(400).send({
      message: `No manufacturer found with the id ${id}`,
    });
  }

  return res.send(manufacturer);
};

exports.getManufacturers = async (req, res) => {

  const manufacturers = await Manufacturer.findAll({
  });

  if (!manufacturers) {
    return res.status(400).send({
      message: `No manufacturers in database yet`,
    });
  }

  return res.send(manufacturers);
};

exports.getManufacturerPhones = async (req, res) => {

  const { id } = req.params;
  const manufacturer = await Manufacturer.findOne({
    where: {
      id,
    },
  });

  const phones = await Phone.findAll({
    where: {manufacturer_id: id}
  });

  if (!phones) {
    return res.status(400).send({
      message: `No phones found for manufacturer ${id}`,
    });
  }

  return res.send(phones);
};

exports.deleteManufacturer = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide an id for the manufacturer you are trying to delete!',
    });
  }

  const manufacturer = await Manufacturer.findOne({
    where: {
      id,
    },
  });

  if (!manufacturer) {
    return res.status(400).send({
      message: `No manufacturer found with the id ${id}`,
    });
  }
  try {
    await manufacturer.destroy();
    return res.send({
      message: `Manufacturer ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updateManufacturer = async (req, res) => {
  const { name, location } = req.body;
  const { id } = req.params;

  const manufacturer = await Manufacturer.findOne({
    where: {
      id,
    },
  });

  if (!manufacturer) {
    return res.status(400).send({
      message: `No manufacturer found with the id ${id}`,
    });
  }

  try {
    manufacturer.update({name: name}, {location: location});
    return res.send({
      message: `Manufacturer ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};
