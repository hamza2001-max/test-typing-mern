import { BsFillPersonFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "../include/Tooltip";
import { useRedux } from "../../hooks/useRedux";

export const Profile = () => {
  const { authSelector } = useRedux();
  const joinedDate = authSelector?.joinedDate;
  const formattedJoinedDate = joinedDate ? new Date(joinedDate).toLocaleDateString() : null;

  return (
    <section className="bg-custom-fadedFill text-custom-primary p-5 mx-7 rounded-lg sm:flex sm:items-center w-[80vw]">
      <div className="flex items-center">
        {authSelector?.profilePicture ? <span className="text-custom-secondary text-3xl">{authSelector?.profilePicture}</span> : <BsFillPersonFill className="bg-custom-primary text-custom-fadedFill min-w-[5rem] min-h-[5rem] rounded-full p-2" />}
        <div className="flex flex-col ml-5 sm:mr-4">
          <span className="text-custom-secondary text-3xl capitalize">{authSelector?.username}</span>
          <span className="text-xs">Joined {formattedJoinedDate?.toString()}</span>
        </div>
        <div className="h-40 w-2 bg-custom-fill hidden sm:block rounded-lg"></div>
      </div>
      <div className="mt-5 sm:mt-0 md:flex-row sm:w-full sm:px-4 space-y-2 xs:space-y-0 xs:flex xs:justify-between sm:flex-col md:px-8 lg:mx-16">
        <div className="flex flex-col text-center">
          <span className="text-xs whitespace-nowrap">tests started</span>
          <span className="text-custom-secondary text-3xl">{authSelector?.testStd === 0 ? "-" : authSelector?.testStd}</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-xs whitespace-nowrap">tests completed</span>
          <span className="text-custom-secondary text-3xl">{authSelector?.testCpl === 0 ? "-" : authSelector?.testCpl}</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-xs whitespace-nowrap">time typing</span>
          <span className="text-custom-secondary text-3xl">{authSelector?.timeTyping === 0 ? "-" : authSelector?.timeTyping.toFixed(2) + "s"}</span>
        </div>
      </div>
      <button className="w-full sm:w-auto flex justify-center text-xl mt-2 outline-none text-custom-primary hover:text-custom-secondary">
        <Tooltip
          icon={MdEdit}
          hover="Edit Profile"
          nowrap={true}
          space="bottom-8"
        />
      </button>
    </section>
  );
};
