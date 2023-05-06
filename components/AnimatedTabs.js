
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



let tabs = [
    { id: "home", label: "Home" , link: "/"},
    { id: "about", label: "About" , link: "/about"},
    { id: "forum", label: "Forum" , link: "/forum"}

]

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const router = useRouter();
  useEffect(() => {
    router.push("/");
    setActiveTab(tabs[0].id);
  }, []);

  return (
    <div className="flex space-x-6 z-30">
      {tabs.map((tab) => (
        <Link href={tab.link} key={tab.id}>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-md font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-30 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
        </Link>
      ))}
    </div>
  );
}
