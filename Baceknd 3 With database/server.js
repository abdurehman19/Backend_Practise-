const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const connectDB = require("./src/db/db");

const app = express();

app.use(cors());
app.use(express.json());
 
connectDB()

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});