import { FaKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useRedux } from "../../hooks/useRedux";
// import { isTestFinishedSlice } from "../../redux/isTestFinishedSlice";

export const Navigation = () => {
  // const { isTestFinishedDispatch } = useRedux();
  // const { testIsFinished, testIsNotFinished } = isTestFinishedSlice.actions;
  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <div className="flex items-center">
        <Link to={"/"}>
          <span className="text-lg sm:text-2xl mr-5 text-custom-secondary font-semibold"
          // onClick={() => {isTestFinishedDispatch(testIsNotFinished())}}
          >
            typeTesting
          </span>
        </Link>
        <div className="text-sm xs:text-xl flex justify-between w-20 xs:w-32 items-end text-custom-primary">
          <Link to={"/"}>
            <FaKeyboard className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          </Link>
          <FaCrown className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          <Link to={"/About"}>
            <FaInfo className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Link to={"/Account"}>Account</Link>
        <Link to={"/Auth"}>
          <FaUser className="text-sm xs:text-xl text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
        </Link>
      </div>
    </nav>
  );
};
