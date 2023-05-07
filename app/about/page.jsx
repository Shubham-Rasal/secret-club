"use client";

import Dock from "@/components/Dock";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const AboutPage = () => {
  return (
    <motion.div 
    key={useRouter().pathname}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: 0.75 , ease: "easeInOut"}}
    className="flex h-full flex-col justify-end pb-10 mt-32 items-center p-12">
      <Dock />
    </motion.div>
  );
};

export default AboutPage;
