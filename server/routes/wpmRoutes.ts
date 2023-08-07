export {};
const express= require("express");
const {getAllWpmRecord, postWpm} = require("../controllers/wpmConroller")

const wpmRoute = express.Router();
wpmRoute.get('/', getAllWpmRecord);
wpmRoute.post('/', postWpm);

module.exports= wpmRoute;