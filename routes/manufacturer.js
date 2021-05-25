const express = require('express');
const router = express.Router();
const manufacturer = require('../controllers/manufacturer.controller');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/manufacturers', manufacturer.getManufacturers);
router.get('/manufacturer/:id', manufacturer.getManufacturer);
router.get('/manufacturer/:id/phones', manufacturer.getManufacturerPhones);
router.post('/manufacturer/create', passport.authenticate('jwt', {session: false}), manufacturer.createManufacturer);
router.put('/manufacturer/:id', manufacturer.updateManufacturer);
router.delete('/manufacturer/:id', manufacturer.deleteManufacturer);

module.exports = router;
