export const testSettingModifierData = [
  {
    title: "punctuation",
  },
  {
    title: "numbers",
  },
];

export const testSettingModeData = [
  {
    title: "time",
    defaultLimit: 30,
  },
  {
    title: "words",
    defaultLimit: 25,
  },
  {
    title: "quote",
    defaultLimit: "medium",
  },
  {
    title: "zen",
  },
  {
    title: "custom",
    defaultLimit: "",
  },
];

export const testSettingLimiterData = {
  "time": [
    {
      "limit": 15
    },
    {
      "limit": 30
    },
    {
      "limit": 60
    },
    {
      "limit": 120
    },
    {
      "limit": "custom"
    }
  ],
  "words": [
    {
      "limit": 10
    },
    {
      "limit": 25
    },
    {
      "limit": 50
    },
    {
      "limit": 100
    },
    {
      "limit": "custom"
    }
  ],
  "quote": [
    {
      "limit": "all"
    },
    {
      "limit": "short"
    },
    {
      "limit": "medium"
    },
    {
      "limit": "long"
    },
    {
      "limit": "search (experiment)"
    }
  ],
  "custom": [    {
    "limit": "change (experiment)"
  }]
}
