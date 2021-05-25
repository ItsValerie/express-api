const getPhone = require('../controllers/phone.controller').getPhone;

test('Association between manufacturer and phones', () => {
  expect(getPhone()).toBeDefined();
});
