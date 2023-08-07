require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const wpmRoute = require("./routes/wpmRoutes"); 
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/wpm/", wpmRoute);

mongoose.connect(process.env.CONNECTION).then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to the port and connecting to the db.");
    })
}).catch((err: Error) => {
    console.log(err);
});