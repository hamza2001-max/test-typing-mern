export {};
const express = require("express");
const {signup, login} = require("../controllers/userController");

const router = express.Router();
router.post("/signup", signup);
router.post("/signup", login);

module.exports = router;