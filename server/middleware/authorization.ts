export {};
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// const {Request, Response} = require("express")

export const authorization = async (req: any, res: any, next: any) => {
  let { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required." });
  }
  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const { _id } = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await userModel.findOne({ _id }).select("_id");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Request is not authorized." });
    }
  }
};
