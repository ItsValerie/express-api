const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.post('/user/register', user.registerUser);
router.post('/user/login', user.loginUser);

module.exports = router;


// - POST `/user/register`; body: `{email, name, password}`; authorisation: `false`
//     - Should handle user registration; password has to be hashed in database;
// - POST `/user/login`; body: `{email, password}`; authorisation: `false`
//     - Should handle user login and if successful, return Basic Authorisation token;
