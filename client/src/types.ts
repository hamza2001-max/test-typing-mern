import { IconType } from "react-icons/lib";

export interface IThemeOption {
  title: string;
  themeClass: string;
  onClick: () => void;
}

export interface ICurrentFragment {
  inputValue: string;
  currentSentenceWord: string;
}

export interface IWordValidator {
  inputValue: string;
  testSentence: string;
  textWritten: string;
}

export interface IPreviousFragment {
  word: string;
  inputValue: string;
  writtenWord: string;
}

export interface ICurrentRemainingLetters {
  currentSentenceWord: string;
  inputValue: string;
}

export interface IPreviousRemainingLetters {
  writtenWord: string;
  word: string;
}

export interface ICalculateResult {
  wpm: number;
  errors: number;
  correctChars: number;
  time: number;
  accuracy: number;
  extras: number;
  missed: number;
}

export interface IWpmArr {
  word: string;
  wpm: number;
  errors: number;
  correctChars: number;
  time: number;
}

export interface IResult {
  source: string;
  textWritten: string;
  testSentence: string;
  elapsedTimeArray: number[];
  handleRefresh: () => void;
  resetState: () => void;
}

export interface IAxios {
  x: number;
  y: number;
}

export interface IData {
  id: string;
  data: IAxios[];
}

export interface ITooltip {
  element?: string;
  hover: string;
  icon?: IconType;
  nowrap: boolean;
  space: string;
}

export interface IProceedResult {
  handleResultRefresh: () => void;
  handleResultReset: () => void;
}

export interface IQuoteJSON {
  [key: string]: { quote: string; source: string }[];
}

export interface ITypingInfo {
  countDown: number;
  inputValue: string;
  textWritten: string;
  testSentence: string;
}

export interface IUseTimer {
  countDownStatus: string;
  countDown: number;
  startCountDown: () => void;
  resetCountDown: () => void;
}

export interface IUseAutoScroll {
  testSentence: string;
  textWritten: string;
}

export interface IPersonalBest {
  category: string;
  variable: number[];
  accessory: string;
}

export interface ILineChart {
  data: IData[],
  xLegend: string
}

export interface IZenFrameProgress {
  textWritten: string;
  inputValue: string;
}

export interface IUseAuth {
  username?: string;
  email: string;
  password?: string;
}

export interface IRecordMutation {
  wpm: number;
  accuracy: number,
  correctChars: number,
  error: number,
  extras: number,
  missed: number,
  mode: string,
  limiter: number | string,
  time: number,
}

export interface IUpdProfileMutation {
  userId: number;
  testStd: number;
  testCpl: number;
  timeTyping: number;
}

export interface IwpmRow{
  _id: number;
  wpm: number;
  accuracy: number;
  correctChars: number;
  error: number;
  extras: number;
  missed: number;
  time: number;
  mode: string;
  limiter: number;
}

export interface IHistoryGraphs {
  variable: number[] | string[];
  category: string;
  deft: number | string;
  accessory?: string;
}

export interface IAuthState {
  userId: number;
  username: string;
  token: string;
  joinedDate: Date;
  testStd: number;
  testCpl: number;
  timeTyping: number;
}

export interface IAuthSlice {
  user: IAuthState | null;
}