const express = require('express');
const { teacherController } = require('../controllers/teacherController');

var jwt = require('jsonwebtoken');

const teacherRoute = express.Router();


let authMiddleware = (req,res,next)=>{
        //string.split();
        //req.headers.authorization = string
        //req.headers.authorization.split()
        console.log(req.headers.authorization.split(" ")[1]);
        var token = req.headers.authorization.split(" ")[1]

        try {
            //jwt.verify(token, secretOrPublicKey, [options, callback])
            var decoded = jwt.verify(token,process.env.JWT_TOKEN);
            next();
        } catch (error) {
            res.send(403).json({
                msg:'Invalid credentials'
            });
        }


        
}

teacherRoute.post('/teacher/create',authMiddleware,teacherController);


//2. Named Export
exports.teacherRoute = teacherRoute;
