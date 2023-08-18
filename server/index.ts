if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: __dirname+'/.env'});
}
// require("dotenv").config();
const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const wpmRoute = require("./routes/wpmRoutes");
const userRoute = require("./routes/userRoutes");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/wpm/", wpmRoute);
app.use("/api/user/", userRoute);

app.use('/some-route', require(path.join(__dirname, 'api', 'routes', 'route.js')));

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client', 'build')));
  app.get('/*', (req:any, res:any) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  })
}

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to the port and connecting to the db.");
    });
  })
  .catch((err: Error) => {
    console.log(err);
  });
