import { FaKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-12 xl:px-52 py-6">
      <div className="flex items-center">
        <span className="text-lg sm:text-2xl mr-5 text-custom-secondary font-semibold">
          typeTesting 
        </span>
        <div className="text-sm xs:text-xl flex justify-between w-20 xs:w-40 items-end text-custom-primary">
          <FaKeyboard className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <FaCrown className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <FaInfo className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <FaCog className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
        </div>
      </div>
      <div className="text-sm xs:text-xl flex justify-between w-10 xs:w-20 items-center text-custom-primary">
        <FaBell className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
        <FaUser className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
      </div>
    </nav>
  );
};
