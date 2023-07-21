import { useRef, useState } from "react";
import { ZenFrameProgress } from "./ZenFrameProgress";

export const ZenFrame = () => {
  const [txtArValue, setTxtArValue] = useState("");
  // const txtArRef = useRef<HTMLTextAreaElement>();

  const handleTxtArChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTxtArValue(e.target.value);
  };

  return (
    <div className="relative text-custom-primary flex items-center flex-col mt-5">
      <div className="flex flex-col align-top">
        <ZenFrameProgress txtArValue={txtArValue} />
        {/* <div
          className="relative flex justify-center"
          onClick={(e) => {
            e.stopPropagation();
            handleFocusClick();
          }}
        >
          {!isInputActiveSelector && (
            <div
              className={`text-lg lg:text-xl px-3 text-custom-secondary z-10 absolute w-full h-full backdrop-blur-sm flex justify-center items-center`}
            >
              <GiArrowCursor className="mr-3" />
              Click here to focus
            </div>
          )}
        </div> */}
        <textarea
          className="resize-none focus:outline-none w-[80vw] md:w-[40rem] lg:w-[50rem] h-36 p-2 text-2xl lg:text-custom-xl "
          onChange={handleTxtArChange}
        />
      </div>
      {/* <button
        className="px-8 py-4 rounded-md text-2xl lg:text-custom-xl flex justify-center mt-10
      hover:text-custom-secondary transition ease-in-out delay-75 focus:bg-custom-secondary
      focus:text-custom-fill outline-none"
        onClick={(e) => {
          e.stopPropagation();
          handleRefresh();
        }}
        ref={btnRef}
      >
        <VscDebugRestart /> */}
      {/* </button> */}
    </div>
  );
};
