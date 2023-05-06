"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const blobRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    router.push("/");
    const onMouseMove = (e) => {
      blobRef.current.animate(
        {
          left: `${e.clientX - 32}px`,
          top: `${e.clientY - 32}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
    window.addEventListener("pointermove", onMouseMove);
    return () => {
      window.removeEventListener("pointermove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 , ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className=" flex flex-col items-center justify-center w-screen h-screen bg-gray-800"
    >
      <div
        ref={blobRef}
        className="blob absolute rounded-full
           w-64 h-64  bg-gradient-to-r from-fuchsia-500 via-pink-500 to-blue-500
           blur-2xl opacity-40
        motion-safe:animate-spin
        left-48 top-48
        transition-all duration-1000          
           "
      ></div>

      <div className="box-container flex space-x-8 ">
        <div
          className="box w-64 h-64 rounded-md z-10 bg-gray-800
        shadow-2xl flex items-center justify-center
        border border-fuchsia-300
        opacity-75
         animate-pulse
        "
        ></div>
        <div
          className="box w-64 h-64 rounded-md z-10 bg-gray-800
        shadow-2xl flex items-center justify-center
        border border-blue-600
        opacity-75
        
        "
        ></div>
        <div
          className="box w-64 h-64 rounded-md z-10 bg-gray-800
        shadow-2xl flex items-center justify-center
        border border-blue-600
        opacity-75
        "
        ></div>
      </div>
    </motion.div>
  );
};

export default HomePage;
