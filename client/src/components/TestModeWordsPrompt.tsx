export const TestModeWordsPrompt = () => {
  return (
    <div
      className="w-98 space-y-4 p-8 border border-custom-primary rounded-xl text-custom-primary bg-custom-fill absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-xl">Word Amount</h1>
      <input type="text" className="text-lg w-full p-2 rounded-lg" />
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque
        labore in qui soluta, necessitatibus vitae esse?
      </p>
      <button className="w-full rounded-lg py-2 bg-custom-primary text-custom-secondary">
        Enter
      </button>
    </div>
  );
};