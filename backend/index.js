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
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);



app.listen(process.env.PORT, () => {
    console.log(`Backend server is running`);
});