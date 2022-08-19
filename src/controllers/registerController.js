const { User } = require("../models/User");

//JS HOF
let registerController = (req,res)=>{

    //DB INSERT
    console.log(req.body)
    const user = new User(req.body);
    user.save().then(d => {
        res.status(200).json({
            msg:'OK'
        });
    }).catch(e=>{
        res.status(400).json({
            msg:'error'
        });
    });

    
}



//2. Named
module.exports = { registerController };