import { FaKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6">
      <div className="flex items-center text-lg">
        <h1 className="mr-5 text-custom-secondary font-semibold">
          typeTesting
        </h1>
        <div className="text-sm flex justify-between w-20 items-end text-custom-primary">
          <FaKeyboard className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <FaCrown className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <FaInfo className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <FaCog className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
        </div>
      </div>
      <div className="text-sm flex justify-between w-10 items-center text-custom-primary">
        <FaBell className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
        <FaUser className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
      </div>
    </nav>
  );
};
