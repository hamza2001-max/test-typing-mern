import { FiUserPlus } from "react-icons/fi";

export const Signin = () => {
  return (
    <form action="">
      <div className="flex flex-col space-y-1">
        <span>register</span>
        <input type="text" />
        <input type="email" />
        <input type="verify email" />
        <input type="password" />
        <input type="verify password" />
        <button>
          <FiUserPlus /> Sign Up
        </button>
      </div>
    </form>
  );
};
