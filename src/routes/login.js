
const express = require('express');
const { loginController } = require('../controllers/loginController');

const loginRoute = express.Router();



loginRoute.post('/login',loginController);


//2. Named export
module.exports = { loginRoute }