"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { AnimatePresence } from "framer-motion";



export default function RootLayout({ children }) {
  console.log(children)
  return (
    <html lang="en">
        <body className="absolute w-screen bg-gray-800">
          <Navbar />
      <AnimatePresence>
        {children}
      </AnimatePresence>
        </body>
    </html>
  );
}
