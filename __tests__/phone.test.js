const Phone = require('../models').Phone;

test('New phone entry is an instance of Phone', () => {
  expect(new Phone()).toBeInstanceOf(Phone);
});
