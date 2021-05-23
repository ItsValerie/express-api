const express = require('express');
const router = express.Router();
const manufacturer = require('../controllers/manufacturer.controller');

router.get('/manufacturers', manufacturer.getManufacturers);
router.get('/manufacturers/:id', manufacturer.getManufacturer);
router.post('/manufacturers/new', manufacturer.createManufacturer)
router.put('/manufacturers/:id', manufacturer.updateManufacturer)
router.delete('/manufacturers/:id', manufacturer.deleteManufacturer)

module.exports = router;
