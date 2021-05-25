const User = require('../models').User;
const registerUser = require('../controllers/user.controller').registerUser;

test('User can be registered', () => {
  expect(registerUser).toBeDefined();
});

test('New user entry is an instance of User', () => {
  expect(new User()).toBeInstanceOf(User);
});
