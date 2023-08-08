import { userSchemaInterface } from "../typescript/types";

export {};
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: "string",
    required: true,
    minLength: 3,
    maxlength: 30,
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
    maxlength: 30,
    select: false,
  },
  joinedDate: {
    type: "date",
    default: Date.now,
  },
  profilePicture: {
    type: "String",
    default: "default-profile-image.jpg",
  },
});

userSchema.static.signup = async function ({
  email,
  password,
  username,
}: userSchemaInterface) {
  try {
    if (!email || !password || !username) {
      throw new Error("Please fill the required fields");
    }
    if(!validator.isLength(username, {min: 3, max: 30})){
        throw new Error("The length of username should be between 3 and 30.")
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
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash, username });
    return user;
  } catch (err) {
    throw err;
  }
};

userSchema.static.login = async function ({email, password}:userSchemaInterface){
    try {
        if (!email || !password) {
          throw new Error("Please fill the required fields");
        }
        const user = await this.findOne({email});
        if(!user){
            throw new Error("User does not exist.");
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            throw new Error("wrong Password");
        }
      } catch (err) {
        throw err;
      }
}

module.exports = mongoose.model("UserSchema", userSchema);
