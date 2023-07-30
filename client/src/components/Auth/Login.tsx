import { AiOutlineGoogle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";

export const Login = () => {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <form action="">
      <div className="flex flex-col space-y-2 w-60">
        <span className="text-custom-tertiary">login</span>
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="email"
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="password"
        />
        <span className="text-custom-tertiary flex items-baseline">
          <div className="relative">
            <input
              type="checkbox"
              className="appearance-none w-4 h-4 bg-custom-fadedFill mr-2 rounded-sm"
              onClick={() => setCheckbox(true)}
            />
            {checkbox && (
              <BsCheckLg className="absolute top-[0.12rem] right-[0.53rem]" onClick={() => setCheckbox(false)}/>
            )}
          </div>
          Remember me
        </span>
        <button className="text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <FiLogIn className="mr-2" /> Sign In
        </button>
        <span className="text-custom-tertiary flex justify-center">or</span>
        <button className="text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <AiOutlineGoogle className="mr-2" /> Google Sign In
        </button>
      </div>
    </form>
  );
};
