const Phone = require('../models').Phone;

exports.getPhone = async (req, res) => {
  const { id } = req.params;

  const phone = await Phone.findOne({
    where: {
      id,
    },
  });

  if (!phone) {
    return res.status(400).send({
      message: `No phone found with the id ${id}`,
    });
  }

  return res.send(phone);
};


exports.createPhone = async (req, res) => {
  const {manufacturer_id} = req.params
  const { name, quantity, release_date } = req.body;
  if (!name || !quantity) {
    return res.status(400).send({
      message: 'Please provide a name, quantity and release date to create a phone!',
    });
  }

  let phoneExists = await Phone.findOne({
    where: {
      name,
    },
  });

  if (phoneExists) {
    return res.status(400).send({
      message: 'A phone with this name already exists!',
    });
  }

  try {
    let newPhone = await Phone.create({
      name,
      quantity,
      release_date,
      manufacturer_id
    });
    return res.send(newPhone);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updatePhone = async (req, res) => {
  const { name, quantity, release_date } = req.body;
  const { id } = req.params;

  const phone = await Phone.findOne({
    where: {
      id,
    },
  });

  if (!phone) {
    return res.status(400).send({
      message: `No phone found with the id ${id}`,
    });
  }

  try {
    if (name) {
      phone.name = name;
    }
    if (quantity) {
      phone.quantity = quantity;
    }
    if (release_date) {
      phone.release_date = release_date;
    }

    phone.save();
    return res.send({
      message: `Phone ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.deletePhone = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide an id for the phone you are trying to delete!',
    });
  }

  const phone = await Phone.findOne({
    where: {
      id,
    },
  });

  if (!phone) {
    return res.status(400).send({
      message: `No phone found with the id ${id}`,
    });
  }
  try {
    await phone.destroy();
    return res.send({
      message: `Phone ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

