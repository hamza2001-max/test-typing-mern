export interface themeInterface {
  theme: string;
}

export interface themeInterface {
  testMode: string;
}

export interface themeVisibilityInterface {
  themeVisibility: boolean;
  setThemeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface testSettingsVisibilityInterface {
  testSettingsVisibility: boolean;
  setTestSettingsVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface testModifierInterface {
  title: string;
  testModifier: string;
  setTestModifier: React.Dispatch<React.SetStateAction<string>>;
}

export interface testModeInterface {
  title: string;
  defaultLimit?: string | number;
  testMode: string;
  setTestMode: React.Dispatch<React.SetStateAction<string>>;
  setTestLimit: React.Dispatch<React.SetStateAction<string | number>>;
}

export interface testLimiterInterface {
  testMode: string;
  testLimit: string | number;
  setTestLimit: React.Dispatch<React.SetStateAction<string | number>>;
}
