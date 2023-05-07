'use client';
import Message from "@/components/Message";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";

const ForumPage = () => {
  return (
    <motion.div 
    key={'forum'}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.75 , ease: "easeInOut"}}
    className=" bg-teal-500 h-screen text-white font-bold   ">
      <SideBar />

      <div className="flex flex-col items-center justify-center h-full ml-16 ">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </motion.div>
  );
};

export default ForumPage;
