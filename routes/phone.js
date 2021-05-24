const express = require('express');
const router = express.Router();
const phone = require('../controllers/phone.controller');

router.get('/phone/:id', phone.getPhone);
router.post('/phone/create/:manufacturer_id', phone.createPhone);
router.put('/phone/:id', phone.updatePhone);
router.delete('/phone/:id', phone.deletePhone);

module.exports = router;


// - POST `/phone/create/{manufacturer_key}`; body: `{name, quantity, releaseDate}`; authorisation: `true`
//     - Should create new phone object that is assigned to designated manufacturer
// - PUT `/phone/{phone_key}`; body: `{name, quantity, releaseDate}`; authorisation: `true`
//     - Should update data about specific phone model;
// - GET `/phone/{phone_key}`; authorisation: `false`
//     - Should return only data about specified phone;
// - DELETE `/phone/{phone_key}`; authorisation: `true`
//     - Should remove phone;
