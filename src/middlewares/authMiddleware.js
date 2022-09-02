var jwt = require('jsonwebtoken');


let authMiddleware = (req,res,next)=>{
    // check if you are sending authorization token 
    if(req.headers.authorization){
        //string.split();
        //req.headers.authorization = string
        //req.headers.authorization.split()
        console.log(req.headers.authorization.split(" ")[1]);
        var token = req.headers.authorization.split(" ")[1]

        try {
            //jwt.verify(token, secretOrPublicKey, [options, callback])
            var decoded = jwt.verify(token,process.env.JWT_TOKEN);
            console.log(decoded);
            //Lets create a new key and attact to the req object
            req.role = decoded.role;
            req.email = decoded.user;

            next();
        } catch (error) {
            res.status(403).json({
                msg:'Invalid credentials'
            });
        }
    }else{
        res.status(403).json({
            msg:"Authorization header is required"
        });
    }
    
}

let teacherAuthMiddleware = (req,res,next)=>{
    console.log(req.role);
    if(req.role === 'admin'){
        
        next();
    }else{
        res.status(403).json({msg:'Unauthorized access'});
    }

    
}
let studentAuthMiddleware = (req,res,next)=>{
    console.log(req.role);
    if(req.role === 'student'){
        
        next();
    }else{
        res.status(403).json({msg:'Unauthorized access'});
    }

    
}
let adminAuthMiddleware = (req,res,next)=>{
    console.log(req.role);
    if(req.role === 'admin'){
        
        next();
    }else{
        res.status(403).json({msg:'Unauthorized access'});
    }

    
}


module.exports = { 
                    authMiddleware,
                    teacherAuthMiddleware,
                    studentAuthMiddleware,
                    adminAuthMiddleware 
                }