export {};
// import { authorization } from "../middleware/authorization";
const express= require("express");
const {getAllWpmRecord, postWpm} = require("../controllers/wpmController")

const wpmRoute = express.Router();
// wpmRoute.use(authorization);
wpmRoute.get('/', getAllWpmRecord);
wpmRoute.post('/', postWpm);

module.exports= wpmRoute;