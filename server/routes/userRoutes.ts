export {};
const express = require("express");
const {
  signup,
  login,
  updateProfile,
  googleLogin,
  upload,
  uploadPicture
} = require("../controllers/userController");

const userRoute = express.Router();
userRoute.post("/signup", signup);
userRoute.post("/login", login);
userRoute.post("/googleLogin", googleLogin);
userRoute.put("/updateProfile/:id", updateProfile);
userRoute.put("/updatePicture", upload.single("picture"), uploadPicture);

module.exports = userRoute;
