const express = require('express');
const router = express.Router();
const phone = require('../controllers/phone.controller');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/phone/:id', phone.getPhone);
router.post('/phone/create/:manufacturer_id', passport.authenticate('jwt', {session: false}), phone.createPhone);
router.put('/phone/:id', passport.authenticate('jwt', {session: false}), phone.updatePhone);
router.delete('/phone/:id', passport.authenticate('jwt', {session: false}), phone.deletePhone);

module.exports = router;
