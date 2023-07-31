import { BsFillPersonFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "../include/Tooltip";

export const Profile = () => {
  return (
    <section className="bg-custom-fadedFill text-custom-primary p-5 mx-7 rounded-lg sm:flex sm:items-center w-[80vw]">
      <div className="flex items-center">
        <BsFillPersonFill className="bg-custom-primary text-custom-fadedFill w-20 h-20 rounded-full p-2" />
        <div className="flex flex-col ml-5 sm:mr-4">
          <span className="text-custom-secondary text-3xl">Name</span>
          <span className="text-xs">Joined Date</span>
        </div>
        <div className="h-40 w-2 bg-custom-fill hidden sm:block rounded-lg"></div>
      </div>
      <div className="mt-5 sm:mt-0 md:flex-row sm:w-full sm:px-4 space-y-2 xs:space-y-0 xs:flex xs:justify-between sm:flex-col md:px-8 lg:mx-16">
        <div className="flex flex-col">
          <span className="text-xs whitespace-nowrap">tests started</span>
          <span className="text-custom-secondary text-3xl">value</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs whitespace-nowrap">tests completed</span>
          <span className="text-custom-secondary text-3xl">value</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs whitespace-nowrap">time typing</span>
          <span className="text-custom-secondary text-3xl">time</span>
        </div>
      </div>
      <button className="w-full sm:w-auto flex justify-center text-xl mt-2 outline-none text-custom-primary hover:text-custom-secondary">
        <Tooltip
          icon={MdEdit}
          hover="Next Test"
          nowrap={true}
          space="bottom-8"
        />
      </button>
    </section>
  );
};
