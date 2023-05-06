import { IoNavigateCircleOutline } from "react-icons/io5";
import { AiOutlinePlusCircle , AiOutlineFire } from "react-icons/ai";

const SideBar = () => {
  return (
    <div
      className=" fixed w-16 h-full bg-gray-800 text-white
        flex flex-col justify-end"
    >
      <AiOutlinePlusCircle className="sidebar-icon" />
      <IoNavigateCircleOutline className="sidebar-icon" />
      <AiOutlineFire className="sidebar-icon" />
    </div>
  );
};

export default SideBar;
