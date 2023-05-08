import { FaCog } from "react-icons/fa";
import { testSettingsVisibilityInterface } from "../types";
import { useState } from "react";
import { TestSettingsModifierSm } from "./TestSettingsModifierSm";
import { testSettingModeData, testSettingModifierData } from "../jsonData";
import { TestSettingsModeSm } from "./TestSettingsModeSm";
import { TestSettingLimiterSm } from "./TestSettingLimiterSm";
import { testModeSlice } from "../redux/testModeSlice";
import { useDispatch, useSelector } from "react-redux";

export const TestSettings = ({
  testSettingsVisibility,
  setTestSettingsVisibility,
}: testSettingsVisibilityInterface) => {
  // const [testMode, setTestMode] = useState("words");
  const [testModifier, setTestModifier] = useState("");
  const [testLimit, setTestLimit] = useState<number | string>(25);
  const { time, words, quote, zen, custom } = testModeSlice.actions;
  const testModeDispatch = useDispatch();

  const testModeSelector = useSelector(
    (state: { testMode: string }) => state.testMode
  );

  return (
    <section>
      <button
        className="flex items-center text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={() => {
          testSettingsVisibility === false
            ? setTestSettingsVisibility(true)
            : setTestSettingsVisibility(false);
        }}
      >
        <FaCog className="cursor-pointer mr-2" />
        Test Setting
      </button>
      {testSettingsVisibility && (
        <section
          className="w-72 p-4 rounded-xl flex flex-col space-y-6 text-sm bg-custom-fill z-10
        text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-2">
            {/* <TestSettingsModifierSm/> */}
            {/* <button
              className={`text-custom-${
                testModeSelector === "time" ? `primary` : `secondary`
              } bg-custom-${
                testModeSelector === "time" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModeDispatch(time());
              }}
            >
              time
            </button>
            <button
              className={`text-custom-${
                testModeSelector === "words" ? `primary` : `secondary`
              } bg-custom-${
                testModeSelector === "words" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModeDispatch(words());
              }}
            >
              words
            </button>
            <button
              className={`text-custom-${
                testModeSelector === "quote" ? `primary` : `secondary`
              } bg-custom-${
                testModeSelector === "quote" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModeDispatch(quote());
              }}
            >
              quote
            </button>
            <button
              className={`text-custom-${
                testModeSelector === "zen" ? `primary` : `secondary`
              } bg-custom-${
                testModeSelector === "zen" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModeDispatch(zen());
              }}
            >
              zen
            </button>
            <button
              className={`text-custom-${
                testModeSelector === "custom" ? `primary` : `secondary`
              } bg-custom-${
                testModeSelector === "custom" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModeDispatch(custom());
              }}
            >
              custom
            </button> */}
          </div>
          <div className="flex flex-col space-y-2">
          <TestSettingsModeSm/>

            {/* {testSettingModeData.map((button) => (
              <TestSettingsModeSm
                time={time}
                title={button.title}
                defaultLimit={button.defaultLimit}
                setTestLimit={setTestLimit}
              />
            ))} */}
          </div>
          {/* <TestSettingLimiterSm
            testMode={testMode}
            testLimit={testLimit}
            setTestLimit={setTestLimit}
          /> */}
        </section>
      )}
    </section>
  );
};
