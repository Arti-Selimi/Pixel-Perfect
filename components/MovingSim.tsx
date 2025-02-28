"use client";
import { motion } from "framer-motion";

export default function MovingSim() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-20"
      animate={{ x: ["100%", "0%"], y: ["0%", "100%"] }}
      transition={{ repeat: Infinity, duration: 7.5, ease: "linear" }}
    >
      <div className="w-2 h-2 bg-green-500 opacity-40"></div>
    </motion.div>
  );
}
