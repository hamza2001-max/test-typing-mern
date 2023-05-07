export interface themeInterface {
  theme: string;
}
export interface themeVisibilityInterface {
  themeVisibility: boolean;
  setThemeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface testSettingsVisibilityInterface {
  testSettingsVisibility: boolean;
  setTestSettingsVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
