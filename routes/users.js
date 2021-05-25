const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.post('/user/register', user.registerUser);
router.post('/user/login', user.loginUser);

module.exports = router;
