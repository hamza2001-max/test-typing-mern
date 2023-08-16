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
      userId: newUser._id,
      username,
      token,
      joinedDate: newUser.joinedDate,
      testStd: newUser.testStd,
      testCpl: newUser.testCpl,
      timeTyping: newUser.timeTyping,
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
    res.status(200).json({
      userId: user._id,
      username: user.username,
      token,
      joinedDate: user.joinedDate,
      testStd: user.testStd,
      testCpl: user.testCpl,
      timeTyping: user.timeTyping,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const googleLogin = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await userSchema.findOne({ email });
    if (!user) {
      throw new Error("User does not exist, sign up first.");
    }
    let token = generateToken(user._id);
    res.status(200).json({
      userId: user._id,
      username: user.username,
      token,
      joinedDate: user.joinedDate,
      testStd: user.testStd,
      testCpl: user.testCpl,
      timeTyping: user.timeTyping,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { testStd, testCpl, timeTyping } = req.body;

  userSchema.findById({ _id: id }).then(async function (updateInfo: any) {
    try {
      updateInfo.testStd = await testStd;
      updateInfo.testCpl = await testCpl;
      updateInfo.timeTyping = await timeTyping;
      await updateInfo.save();
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });
};

module.exports = {
  signup,
  login,
  updateProfile,
  googleLogin,
};
