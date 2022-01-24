const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((err)=>console.log(err));





app.listen(8000, () => {
    console.log(`Backend server is running`);
});