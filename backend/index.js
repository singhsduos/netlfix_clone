const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");


dotenv.config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((err)=>console.log(err));


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(express.json());
app.use("/api/v1", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/lists", listRoute);



app.listen(8000, () => {
    console.log(`Backend server is running`);
});