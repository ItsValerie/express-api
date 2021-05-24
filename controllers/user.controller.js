const User = require('../models').User;
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      message: 'Please provide a name, email and password to register!',
    });
  }

  let userExists = await User.findOne({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(400).send({
      message: 'A user with this email already exists!',
    });
  }
  const hash = await bcrypt.hash(password, 10);

  try {
    let newUser = await User.create({
      name: name,
      email: email,
      password: hash,
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};
