import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const userSchema = require("../models/userModel");

const generateToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await userSchema.signup({ email, password, username });
    let token = generateToken(newUser._id);
    res.status(200).json({
      username,
      token,
      joinedDate: newUser.joinedDate,
      profilePicture: newUser.profilePicture,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.login({ email, password });
    let token = generateToken(user._id);
    res
      .status(200)
      .json({
        username: user.username,
        token,
        joinedDate: user.joinedDate,
        profilePicture: user.profilePicture,
      });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signup, login };
