const Phone = require('../models').Phone;
const createPhone = require('../controllers/phone.controller').createPhone;

test('New phone in aossciation with manufacturer can be created', () => {
  expect(createPhone).toBeDefined();
});

test('New phone entry is an instance of Phone', () => {
  expect(new Phone()).toBeInstanceOf(Phone);
});
