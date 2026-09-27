const express = require('express')
const connectDB = require('./db/db')
const app = express()
const multer = require('multer')
const dotenv = require('dotenv')
const uploadFile = require('./services/storage.service')
const postmodol = require ('./models/post.modol')
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
    
    const post = await postmodol.create({
        image : result.url,
        caption : req.body.caption
    })
    
    return res.status(201).json ({
        message : "Post crated Successfull",
        post
    })
})



app.get('/', (req, res) => {
    res.send("Server is working");
})


app.listen(port, () => {
    console.log("server is runnig", port);

})

