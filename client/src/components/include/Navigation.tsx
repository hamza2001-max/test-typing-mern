import { FaKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import { FiLogOut } from "react-icons/fi";
import { authSlice } from "../../redux/authSlice";

export const Navigation = () => {
  const { authSelector, authDispatch } = useRedux();
  const { logout } = authSlice.actions;

  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <div className="flex items-center">
        <Link to={"/"}>
          <span className="text-lg sm:text-2xl mr-5 text-custom-secondary font-semibold"
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
        {authSelector ? <Link to={"/Account"}>
          <div className="mr-5 flex">
          <FaUser className="mr-1 text-sm xs:text-xl text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          {authSelector.username}
          </div>
        </Link>
          : <Link to={"/Auth"}>
            <FaUser className="text-sm xs:text-xl text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          </Link>
        }
        {authSelector && <FiLogOut onClick={() => authDispatch(logout())} className="text-sm xs:text-xl text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />}
      </div>
    </nav>
  );
};
