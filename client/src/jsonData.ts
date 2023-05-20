import {
  testLimiterSlice,
  testModeSlice,
  testModifierSlice,
} from "./redux/testSettingsSlice";
const { time, words, quote, zen, custom } = testModeSlice.actions;
const { punctuation, numbers } = testModifierSlice.actions;
const { testLimiterReducer } = testLimiterSlice.actions;

export const testSettingModifierData = [
  {
    label: "punctuation",
    action: punctuation,
  },
  {
    label: "numbers",
    action: numbers,
  },
];

export const testSettingModeData = [
  { label: "time", defaultLimit: testLimiterReducer(30), action: time },
  { label: "words", defaultLimit: testLimiterReducer(10), action: words },
  { label: "quote", defaultLimit: testLimiterReducer("medium"), action: quote },
  { label: "zen", action: zen },
  { label: "custom", action: custom },
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
    {
      limit: "custom",
      action: testLimiterReducer("custom"),
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
    {
      limit: "custom",
      action: testLimiterReducer("custom"),
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
      limit: "search",
      action: testLimiterReducer("search"),
    },
  ],
  custom: [
    {
      limit: "change",
      action: testLimiterReducer("change"),
    },
  ],
};
