import { FaKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export const Navigation = () => {
  return (
    <section className="flex justify-between items-center px-6 py-6">
      <div className="flex justify-between w-36 items-center text-lg">
        <FaKeyboard className="cursor-pointer"/>
        <FaCrown className="cursor-pointer"/>
        <FaInfo className="cursor-pointer"/>
        <FaCog className="cursor-pointer"/>
      </div>
      <div className="flex justify-between w-16 items-center text-lg">
        <FaBell className="cursor-pointer"/>
        <FaUser className="cursor-pointer"/>
      </div>
    </section>
  );
};
