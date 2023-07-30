import { FiUserPlus } from "react-icons/fi";

export const Signup = () => {
  return (
    <form action="">
      <div className="flex flex-col space-y-2 w-60">
        <span className="text-custom-tertiary">register</span>
        <input
          type="text"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="username"
        />
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="email"
        />
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="verify email"
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="password"
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="verify password"
        />
        <button className="text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <FiUserPlus className="mr-2"/> Sign Up
        </button>
      </div>
    </form>
  );
};
