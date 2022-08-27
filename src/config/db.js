const env = require('dotenv');
env.config();

//DB Connection Code
const mongoose = require('mongoose')
//mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.dgmru.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect(`mongodb://localhost:27017`)
.then(d=>console.log('connected'))
.catch(e=>console.log('error',e));

exports.mongoose = mongoose;