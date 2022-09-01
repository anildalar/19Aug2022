const express = require('express');
const { teacherController } = require('../controllers/teacherController');

var jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middlewares/authMiddleware');

const teacherRoute = express.Router();

teacherRoute.post('/teacher/create',authMiddleware,teacherController);


//2. Named Export
exports.teacherRoute = teacherRoute;
