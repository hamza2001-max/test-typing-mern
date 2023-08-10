import { IZenFrameProgress } from "../../types";

export const ZenFrameProgress = ({
  textWritten,
  inputValue,
}: IZenFrameProgress) => {
  return (
    <>
      {(inputValue || textWritten) && (
        <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
          {textWritten.split(" ").length - 1}
        </span>
      )}
    </>
  );
};
