const express = require('express')
const connectDB = require('./db/db')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT


connectDB()

app.listen(port, () => {
    console.log("server is runnig", port);

})