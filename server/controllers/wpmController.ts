export {};
import { Response, Request } from "express";
import { IExtendsRequest } from "../types";
const WpmSchema = require("../models/wpmModel");

const getAllWpmRecord = async (req: IExtendsRequest, res: Response) => {
  const userId = req.user?._id;
  const wpmRecord = await WpmSchema.find().sort({ createdAt: -1 });
  res.status(200).json(wpmRecord);
};

const postWpm = async (req1: IExtendsRequest, req2: Request, res: Response) => {
  const userId = req1.user?._id;
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
  } = req2.body;
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
