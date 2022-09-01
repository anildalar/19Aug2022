

//JS HOF
let teacherController = (req,res)=>{
    res.status(200).json({
        msg:"ok",
        myemail:req.email,
        myrole:req.role
    });
}

exports.teacherController = teacherController;