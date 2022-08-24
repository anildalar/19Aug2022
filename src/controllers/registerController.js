const { User } = require("../models/User");
const bcrypt = require('bcrypt');

//JS HOF
let registerController = (req,res)=>{

    //1. Check if the user is already registered or not
    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    console.log(req.body);
    User.findOne({ email: req.body.email }, function (err, user) {
        //
        //Check the value of user
        console.log(user);
        if( user === null){
            // I can register the user
            

            console.log(req.body.password_hash);
            const saltRounds = 10;
            let encryptedpassword = bcrypt.hashSync(req.body.password_hash, saltRounds);;
            req.body.password_hash = encryptedpassword;

            const user = new User(req.body);
            user.save().then(d => {
                res.status(200).json({
                    msg:'User registed successfully'
                });
            }).catch(e=>{
                res.status(400).json({
                    msg:'error'
                });
            });
            
        }else{
            res.status(404).json({
                msg:'User is already registerd'
            });
        }

        
        //1 . user is empty
                //1.1 insert

        //2. user is not emtpy
                //2.1 Error
    });
    //2. DB INSERT
    

    
}



//2. Named
module.exports = { registerController };