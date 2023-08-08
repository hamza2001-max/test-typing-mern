export {};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wpmSchema = new Schema({
  wpm: {
    type: "number",
    required: "true",
  },
  accuracy: {
    type: "number",
    required: "true",
  },
  correctChars: {
    type: "number",
    required: "true",
  },
  error: {
    type: "number",
    required: "true",
  },
  extras: {
    type: "number",
    required: "true",
  },
  missed: {
    type: "number",
    required: "true",
  },
  mode: {
    type: "string",
    required: "true",
  },
  limiter: {
    type: "number",
    required: "true",
  },
  time: {
    type: "number",
    required: "true",
  },
});

module.exports = mongoose.model("WpmSchema", wpmSchema);
