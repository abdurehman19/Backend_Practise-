const mongoose = require('mongoose')


async function connectDB() {

    const url = process.env.MONGO_URI
   try {

    await mongoose.connect(url)

    console.log("connnect DATA");
   } catch (error) {
    console.log(error);
    
   }
    
}
module.exports=connectDB