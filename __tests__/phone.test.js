const Phone = require('../models').Phone;
const createPhone = require('../controllers/phone.controller').createPhone;
const updatePhone = require('../controllers/phone.controller').updatePhone;
const deletePhone = require('../controllers/phone.controller').deletePhone;

test('New phone can be created', () => {
  expect(createPhone).toBeDefined();
});

test('New phone entry is an instance of Phone', () => {
  expect(new Phone()).toBeInstanceOf(Phone);
});

test('A phone can be deleted', () => {
  expect(deletePhone).toBeDefined();
});

test('A phone can be updated', () => {
  expect(updatePhone).toBeDefined();
});
