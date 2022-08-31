

//JS HOF
let teacherController = (req,res)=>{
    res.status(200).json({
        msg:"ok"
    });
}

exports.teacherController = teacherController;