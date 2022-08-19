const express = require('express');
const { registerController } = require('../controllers/registerController');

const registerRoute = express.Router();


registerRoute.post('/register',registerController);


//2. Named Export
exports.registerRoute = registerRoute;



