const express = require('express');
const router = express.Router();

const manufacturer = require('../controllers/manufacturer.controller');


router.get('/manufacturers/:id', manufacturer.getManufacturer);
router.delete('/manufacturers/:id', manufacturer.deleteManufacturer)
router.post('/manufacturers/new', manufacturer.createManufacturer)

module.exports = router;
