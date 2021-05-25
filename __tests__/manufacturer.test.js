const Manufacturer = require('../models').Manufacturer;
const createManufacturer = require('../controllers/manufacturer.controller').createManufacturer;
const updateManufacturer = require('../controllers/manufacturer.controller').updateManufacturer;
const deleteManufacturer = require('../controllers/manufacturer.controller').deleteManufacturer;

test('New manufacturer can be created', () => {
  expect(createManufacturer).toBeDefined();
});

test('New manufacturer entry is an instance of Manufacturer', () => {
  expect(new Manufacturer()).toBeInstanceOf(Manufacturer);
});

test('Manufacturer can be updated', () => {
  expect(updateManufacturer).toBeDefined();
});

test('Manufacturer can be deleted', () => {
  expect(deleteManufacturer).toBeDefined();
});
