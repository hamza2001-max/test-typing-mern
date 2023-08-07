export {};
import { Request, Response } from "express";
const WpmSchema = require("../models/wpmModel");

const getAllWpmRecord = async (req: Request, res: Response) => {
  const wpmRecord = await WpmSchema.find();
  res.status(200).json(wpmRecord);
};

const postWpm = async (req: Request, res: Response) => {
  const { wpm, accuracy, correctChars, error, extras, missed, time } = req.body;
  try {
    const wpmRecord = await WpmSchema.create({
      wpm,
      accuracy,
      correctChars,
      error,
      extras,
      missed,
      time,
    });
    res.status(200).json(wpmRecord);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getAllWpmRecord, postWpm };
