import { FaCog } from "react-icons/fa";
import { testSettingsVisibilityInterface } from "../types";
import { useState } from "react";

export const TestSettings = ({
  testSettingsVisibility,
  setTestSettingsVisibility,
}: testSettingsVisibilityInterface) => {
  const [testMode, setTestMode] = useState("words");
  const [testModifier, setTestModifier] = useState("");
  const [testLimit, setTestLimit] = useState<number | string>(25);

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
            <button
              className={`text-custom-${
                testModifier === "punctuation" ? `primary` : `secondary`
              } bg-custom-${
                testModifier === "punctuation" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModifier === ""
                  ? setTestModifier("punctuation")
                  : setTestModifier("");
              }}
            >
              punctuation
            </button>
            <button
              className={`text-custom-${
                testModifier === "numbers" ? `primary` : `secondary`
              } bg-custom-${
                testModifier === "numbers" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                testModifier === ""
                  ? setTestModifier("numbers")
                  : setTestModifier("");
              }}
            >
              numbers
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              className={`text-custom-${
                testMode === "time" ? `primary` : `secondary`
              } bg-custom-${
                testMode === "time" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                setTestMode("time");
                setTestLimit(30);
              }}
            >
              time
            </button>
            <button
              className={`text-custom-${
                testMode === "words" ? `primary` : `secondary`
              } bg-custom-${
                testMode === "words" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                setTestMode("words");
                setTestLimit(25);
              }}
            >
              words
            </button>
            <button
              className={`text-custom-${
                testMode === "qoute" ? `primary` : `secondary`
              } bg-custom-${
                testMode === "qoute" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => {
                setTestMode("qoute");
                setTestLimit("medium");
              }}
            >
              qoute
            </button>
            <button
              className={`text-custom-${
                testMode === "zen" ? `primary` : `secondary`
              } bg-custom-${
                testMode === "zen" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => setTestMode("zen")}
            >
              zen
            </button>
            <button
              className={`text-custom-${
                testMode === "custom" ? `primary` : `secondary`
              } bg-custom-${
                testMode === "custom" ? `secondary` : `primary`
              } py-2 rounded-md`}
              onClick={() => setTestMode("custom")}
            >
              custom
            </button>
          </div>
          {testMode === "time" && (
            <div className="flex flex-col space-y-2">
              <button
                className={`text-custom-${
                  testLimit === 15 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 15 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(15)}
              >
                15
              </button>
              <button
                className={`text-custom-${
                  testLimit === 30 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 30 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(30)}
              >
                30
              </button>
              <button
                className={`text-custom-${
                  testLimit === 60 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 60 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(60)}
              >
                60
              </button>
              <button
                className={`text-custom-${
                  testLimit === 120 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 120 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(120)}
              >
                120
              </button>
              <button
                className={`text-custom-${
                  testLimit === "custom" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "custom" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("custom")}
              >
                custom
              </button>
            </div>
          )}
          {testMode === "words" && (
            <div className="flex flex-col space-y-2">
              <button
                className={`text-custom-${
                  testLimit === 10 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 10 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(10)}
              >
                10
              </button>
              <button
                className={`text-custom-${
                  testLimit === 25 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 25 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(25)}
              >
                25
              </button>
              <button
                className={`text-custom-${
                  testLimit === 50 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 50 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(50)}
              >
                50
              </button>
              <button
                className={`text-custom-${
                  testLimit === 100 ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === 100 ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit(100)}
              >
                100
              </button>
              <button
                className={`text-custom-${
                  testLimit === "custom" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "custom" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("custom")}
              >
                custom
              </button>
            </div>
          )}
          {testMode === "qoute" && (
            <div className="flex flex-col space-y-2">
              <button
                className={`text-custom-${
                  testLimit === "all" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "all" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("all")}
              >
                all
              </button>
              <button
                className={`text-custom-${
                  testLimit === "short" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "short" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("short")}
              >
                short
              </button>
              <button
                className={`text-custom-${
                  testLimit === "medium" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "medium" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("medium")}
              >
                medium
              </button>
              <button
                className={`text-custom-${
                  testLimit === "long" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "long" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("long")}
              >
                long
              </button>
              <button
                className={`text-custom-${
                  testLimit === "search" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "search" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("search")}
              >
                search (experiment)
              </button>
            </div>
          )}
          {testMode === "custom" && (
            <div className="flex flex-col space-y-2">
              <button
                className={`text-custom-${
                  testLimit === "change" ? `primary` : `secondary`
                } bg-custom-${
                  testLimit === "change" ? `secondary` : `primary`
                } py-2 rounded-md`}
                onClick={() => setTestLimit("change")}
              >
                change (experiment)
              </button>
            </div>
          )}
        </section>
      )}
    </section>
  );
};
