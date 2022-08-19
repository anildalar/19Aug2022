const express = require('express');
const app = express();
const env = require('dotenv');
env.config();

const { registerRoute } = require('./routes/register')


app.use(express.json());
app.use('/api',registerRoute);

let port = process.env.PORT;
app.listen(port,()=>{
    console.log('listening on port',port);
});