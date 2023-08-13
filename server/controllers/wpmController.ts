export {};
import { Response } from "express";
const WpmSchema = require("../models/wpmModel");

const getAllWpmRecord = async (req: any, res: Response) => {
  const userId = req.user?._id;
  const wpmRecord = await WpmSchema.find({userId}).sort({ createdAt: -1 });
  res.status(200).json(wpmRecord);
};

const postWpm = async (req: any, res: Response) => {
  const userId = req.user?._id;
  const {
    wpm,
    accuracy,
    correctChars,
    error,
    extras,
    missed,
    mode,
    limiter,
    time,
  } = req.body;
  try {
    const wpmRecord = await WpmSchema.create({
      wpm,
      accuracy,
      correctChars,
      error,
      extras,
      missed,
      mode,
      limiter,
      time,
      userId,
    });
    res.status(200).json(wpmRecord);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getAllWpmRecord, postWpm };
