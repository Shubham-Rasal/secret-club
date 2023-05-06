"use client";
import AnimatedTabs from "./AnimatedTabs";
const { default: Link } = require("next/link");

const Navbar = () => {
  

  return (
    <div className="bg-gray-900 text-white h-16  w-full fixed z-30">
      <div className="flex h-full  items-center w-full justify-center">
        <AnimatedTabs />
      </div>
    </div>
  );
};

export default Navbar;
