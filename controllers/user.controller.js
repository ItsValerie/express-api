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
  const hashed_password = await bcrypt.hash(password, 10);

  try {
    let newUser = await User.create({
      name: name,
      email: email,
      password: hashed_password,
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.loginUser = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({message: `Missing ${!email ? "email" : 'password'}!`})
  }

try {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if(user) {
    const validPass = await bcrypt.compare(password, user.password);
      if(validPass) {
        res.status(200).send({message: 'Successfully logged in'});
      } else {
        res.status(400).send({message: 'Wrong password'});
            }
        } else {
          res.status(404).send({message: 'User not found'});
        }
    } catch(err) {
      return res.status(400).send({
      message: `Error: ${err.message}`,
      });
    }
};
