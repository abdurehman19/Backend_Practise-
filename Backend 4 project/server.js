const express = require('express')
const connectDB = require('./db/db')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT


connectDB()

app.use(express.json())

app.post('/create-post',async(req,res)=>{
    console.log(req.body);
    
})

app.listen(port, () => {
    console.log("server is runnig", port);

})