import { AiFillFolder, AiFillSave } from "react-icons/ai";

export const CustomLimiter = () => {
  return (
    <div
      className="fixed z-30 w-98 p-6 rounded-xl flex flex-col space-y-3 text-xl bg-custom-fill 
      text-custom-secondary border border-custom-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <section className="flex flex-col justify-center items-center space-y-4">
        <button className="w-full py-2 flex rounded-md justify-center items-center bg-custom-fadedFill ">
          <AiFillSave className="mr-2" />
          Save
        </button>
        <button className="w-full py-2 flex rounded-md justify-center items-center bg-custom-fadedFill ">
          <AiFillFolder className="mr-2 text-2xl" />
          Show Saved Texts
        </button>
        <textarea className="max-h-[60vh] h-[60vh] w-full rounded-md p-3 bg-custom-fadedFill resize-y outline-none">
          The quick brown fox jumps over the lazy dog.
        </textarea>
        <button className="w-full py-2 flex rounded-md justify-center items-center bg-custom-fadedFill ">
          ok
        </button>
      </section>
    </div>
  );
};
