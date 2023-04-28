import { FaCog } from "react-icons/fa";
import { useState } from "react";

export const TestSettings = () => {
  const [testSettings, setTestSettings] = useState(false);

  return (
    <section>
      <button
        className="flex items-center"
        onClick={() => {
          testSettings === false
            ? setTestSettings(true)
            : setTestSettings(false);
        }}
      >
        <FaCog className="cursor-pointer mr-2" />
        Test Setting
      </button>
      {testSettings && (
        <section>
          <div className="flex flex-col">
            <button>punctuation</button>
            <button>numbers</button>
          </div>
          <div className="flex flex-col">
            <button>time</button>
            <button>words</button>
            <button>qoute</button>
            <button>zen</button>
            <button>custom</button>
          </div>
          <div className="flex flex-col">
            <button>10</button>
            <button>25</button>
            <button>50</button>
            <button>100</button>
            <button>custom</button>
          </div>
        </section>
      )}
    </section>
  );
};
