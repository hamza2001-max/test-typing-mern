import { IStatics } from "../types";

export {};
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: "string",
    required: true,
    unique: true,
    minLength: 3,
    maxlength: 35,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: "string",
    required: true,
    minlength: 8,
    maxlength: 150,
  },
  joinedDate: {
    type: "date",
    default: Date.now,
  },
  profilePicture: {
    type: "String",
    default: "",
  },
  testStd: {
    type: "number",
    default: 0
  },
  testCpl: {
    type: "number",
    default: 0
  },
  timeTyping: {
    type: "number",
    default: 0
  },
});

userSchema.statics.signup = async function ({
  email,
  password,
  username,
}: IStatics) {
  try {
    if (!email || !password || !username) {
      throw new Error("Please fill the required fields");
    }
    if (!validator.isLength(username, { min: 3, max: 30 })) {
      throw new Error("The length of username should be between 3 and 30.");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Provide enter a valid email address.");
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error("Provide a stonger password.");
    }
    const existingUser = await this.findOne({ email });
    if (existingUser) {
      throw new Error("User already exist with this email id.");
    }
    const existingUN = await this.findOne({ username });
    if (existingUN) {
      throw new Error("username must be unique");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash, username });
    user.joinedDate = Date.now;
    user.testStd = 0;
    user.testCpl = 0;
    user.timeTyping = 0;
    return user;
  } catch (err) {
    throw err;
  }
};

userSchema.statics.login = async function ({ email, password }: IStatics) {
  try {
    if (!email || !password) {
      throw new Error("Please fill the required fields");
    }
    const user = await this.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("User does not exist.");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("wrong Password");
    }
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = mongoose.model("UserSchema", userSchema);
