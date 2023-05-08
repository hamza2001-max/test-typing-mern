import {
  testLimiterSlice,
  testModeSlice,
  testModifierSlice,
} from "./redux/testModeSlice";
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
  { label: "time", action: time },
  { label: "words", action: words },
  { label: "quote", action: quote },
  { label: "zen", action: zen },
  { label: "custom", action: custom },
];

// export const testSettingModeData = [
//   {
//     title: "time",
//     defaultLimit: 30,
//   },
//   {
//     title: "words",
//     defaultLimit: 25,
//   },
//   {
//     title: "quote",
//     defaultLimit: "medium",
//   },
//   {
//     title: "zen",
//   },
//   {
//     title: "custom",
//     defaultLimit: "",
//   },
// ];

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
    },
    {
      limit: 25,
    },
    {
      limit: 50,
    },
    {
      limit: 100,
    },
    {
      limit: "custom",
    },
  ],
  quote: [
    {
      limit: "all",
    },
    {
      limit: "short",
    },
    {
      limit: "medium",
    },
    {
      limit: "long",
    },
    {
      limit: "search (experiment)",
    },
  ],
  custom: [
    {
      limit: "change (experiment)",
    },
  ],
};
