const express = require('express');
const app = express();
const env = require('dotenv');
env.config();

const { registerRoute } = require('./routes/register')
const { loginRoute } = require('./routes/login')
const { teacherRoute } = require('./routes/teacher')



app.use(express.json());
app.use('/api',registerRoute);
app.use('/api',loginRoute);
app.use('/api',teacherRoute);

let port = process.env.PORT;
app.listen(port,()=>{
    console.log('listening on port',port);
});