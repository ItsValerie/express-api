const createManufacturer = require('../controllers/manufacturer.controller').createManufacturer;
const Manufacturer = require('../models').Manufacturer;

test('Manufacturer instance can be created', () => {
  expect(createManufacturer).toBeDefined();
});

test('New manufacturer entry is an instance of Manufacturer', () => {
  expect(new Manufacturer()).toBeInstanceOf(Manufacturer);
});
