import { testLimiterSlice } from "../redux/testLimiterSlice";
import { testFrameSlice } from "../redux/testFrameSlice";
import { testModifierSlice } from "../redux/testModifierSlice";
import { MdAlternateEmail } from "react-icons/md";
import { BsTriangle } from "react-icons/bs";
import {
  FaHashtag,
  FaClock,
  FaQuoteLeft,
  FaSortAlphaDown,
} from "react-icons/fa";

const { setTimeMode, setWordsMode, setQuoteMode, setZenMode } =
  testFrameSlice.actions;
const { punctuation, numbers } = testModifierSlice.actions;
const { testLimiterReducer } = testLimiterSlice.actions;

export const testSettingModifierData = [
  {
    label: "punctuation",
    action: punctuation,
    icon: MdAlternateEmail,
  },
  {
    label: "numbers",
    action: numbers,
    icon: FaHashtag,
  },
];

export const testSettingModeData = [
  {
    label: "time",
    defaultLimit: testLimiterReducer(30),
    action: setTimeMode,
    icon: FaClock,
  },
  {
    label: "words",
    defaultLimit: testLimiterReducer(25),
    action: setWordsMode,
    icon: FaSortAlphaDown,
  },
  {
    label: "quote",
    defaultLimit: testLimiterReducer("medium"),
    action: setQuoteMode,
    icon: FaQuoteLeft,
  },
  { label: "zen", action: setZenMode, icon: BsTriangle },
];

export const testSettingLimiterData = {
  time: [
    {
      limit: 15,
      action: testLimiterReducer(15),
    },
    {
      limit: 30,
      action: testLimiterReducer(30),
    },
    {
      limit: 60,
      action: testLimiterReducer(60),
    },
    {
      limit: 120,
      action: testLimiterReducer(120),
    },
  ],
  words: [
    {
      limit: 10,
      action: testLimiterReducer(10),
    },
    {
      limit: 25,
      action: testLimiterReducer(25),
    },
    {
      limit: 50,
      action: testLimiterReducer(50),
    },
    {
      limit: 100,
      action: testLimiterReducer(100),
    },
  ],
  quote: [
    {
      limit: "all",
      action: testLimiterReducer("all"),
    },
    {
      limit: "short",
      action: testLimiterReducer("short"),
    },
    {
      limit: "medium",
      action: testLimiterReducer("medium"),
    },
    {
      limit: "long",
      action: testLimiterReducer("long"),
    },
    {
      limit: "thicc",
      action: testLimiterReducer("thicc"),
    },
  ],
};
