const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
dotenv.config();



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// const corsOptions = {
//     origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }

// app.use(cors(corsOptions));



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
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


app.listen(process.env.PORT || 9001, () => {
    console.log(`Backend server is running`);
});

module.exports = app;