const { User } = require("../models/User");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


let loginController = (req,res,)=>{

    // Recive the email and password
    //1. Recive the username/email and password from client.
    console.log(req.body)

    const { email,password } = req.body // Destructuring
    console.log(email)
    console.log(password)

    //2. Check if the username/email is available in db
    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({ email: email},(err,user)=>{

        console.log(user);
        if(user !== null){
            //email is avaiable 
            //3.1 If availabe Say "User Exits We can give the token"

            //3.1 Lets access the existing db hash

            console.log(user.password_hash)

            bcrypt.compare(password, user.password_hash, function(err, result) {
            
                //OK it okay

                res.status(200).json({
                    msg:"Login Success",
                    data:user,
                    token: jwt.sign(req.body,process.env.JWT_TOKEN)
                });
            });

            
        }else{
            res.status(404).json({
                msg:'Invalid credentials'
            });
        }
    })

    
}

module.exports = { loginController }