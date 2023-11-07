const express = require('express');
const router = express.Router();
const authLoginController = require('../controller/authLoginController');

const verifyJWT = require('../middleware/verifyJWT');


router.route('/')
.get(authLoginController.authUsers)
.post(authLoginController.authUsers)


module.exports = router;

