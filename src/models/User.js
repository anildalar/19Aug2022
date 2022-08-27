const { mongoose } = require('../config/db');
const bcrypt = require('bcrypt');
// let object = new object.ClassName();
let userSchema = new mongoose.Schema({   //JS Object
    firstname: String,
    lastname: String,
    email: String,
    username:{
        type: String,
        required:true
    },
    password_hash:String,
    role: String
 },{
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
 userSchema.virtual('password')
    .set(function(password){
        this.hash_password = bcrypt.hashSync(password, 10);
    });

/* let userSchema = {   //JS Object
                    firstname: String,
                    lastname: String,
                    email: String,
                    username:{
                        type: String,
                        required:true
                    },
                    password_hash:String,
                    role: String
                 }; */

const User = mongoose.model('User', userSchema);

exports.User = User;
