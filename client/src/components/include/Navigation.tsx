import { FaKeyboard } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import { FiLogOut } from "react-icons/fi";
import { authSlice } from "../../redux/authSlice";
import { isTestFinishedSlice } from "../../redux/isTestFinishedSlice";
import { useMutation } from "react-query";
import { queryClient } from "../..";
import { IUpdProfileMutation } from "../../types";
import axios from "axios";

export const Navigation = () => {
  const { authSelector, authDispatch, isTestFinishedDispatch } = useRedux();
  const { testIsNotFinished } = isTestFinishedSlice.actions;
  const { logout } = authSlice.actions;

  const updProfileMutationFn = async ({ userId, testCpl, testStd, timeTyping }: IUpdProfileMutation) => {
    const updateProfile = axios.put(`http://localhost:7000/api/user/updateProfile/${userId}`, { userId, testCpl, testStd, timeTyping }, {
      headers: {
        'Authorization': `Bearer ${authSelector?.token}`,
      }
    }).catch((error) => {
      console.log(error);
    })
    return updateProfile;
  }

  const { mutate } = useMutation({
    mutationFn: updProfileMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      console.error("error received from useMutation");
    }
  });

  const linkHandler = () => {
    isTestFinishedDispatch(testIsNotFinished());
  }

  const handleLogout = () => {
    mutate({
      userId: authSelector!.userId,
      timeTyping: authSelector!.timeTyping,
      testCpl: authSelector!.testCpl,
      testStd: authSelector!.testStd,
    })
    authDispatch(logout());
    linkHandler();
  }

  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <div className="flex items-center">
        <Link to={"/"} onClick={linkHandler}>
          <div className="flex flex-col">
            <span className="text-xs -mb-1 text-custom-primary">Test Your Typing</span>
            <span className="text-lg sm:text-2xl mr-10 text-custom-secondary font-semibold"
            >
              typeTesting
            </span>
          </div>
        </Link>
        <div className="text-sm xs:text-xl flex justify-between w-14 xs:w-20 items-end text-custom-primary">
          <Link to={"/"} onClick={linkHandler}>
            <FaKeyboard className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          </Link>
          <Link to={"/About"} onClick={linkHandler}>
            <FaInfo className="cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        {authSelector ? <Link to={"/Account"} onClick={linkHandler}>
          <div className="mr-5 flex group" >
            <FaUser className="mr-1 text-sm xs:text-xl text-custom-primary cursor-pointer group-hover:text-custom-secondary transition ease-in-out delay-75"></FaUser>
            <span className="text-custom-primary cursor-pointer group-hover:text-custom-secondary transition ease-in-out delay-75 capitalize hidden xs:block">{authSelector?.username}</span>
          </div>
        </Link>
          : <Link to={"/Auth"} onClick={linkHandler}>
            <FaUser className="text-sm xs:text-xl text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />
          </Link>
        }
        {authSelector && <FiLogOut onClick={handleLogout} className="text-sm xs:text-xl text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75" />}
      </div>
    </nav>
  );
};
