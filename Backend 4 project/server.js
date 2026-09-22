const express = require('express')
const connectDB = require('./db/db')
const app = express()
const multer = require('multer')
const dotenv = require('dotenv')
const uploadFile = require('./services/storage.service')
dotenv.config()
const port = process.env.PORT


connectDB()

app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single("image"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    
    const result = await uploadFile(req.file.buffer)
    console.log(result);
    

})


app.get('/', (req, res) => {
    res.send("Server is working");
})


app.listen(port, () => {
    console.log("server is runnig", port);

})

