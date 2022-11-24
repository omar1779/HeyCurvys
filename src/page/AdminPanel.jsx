import React from "react";
import Nav from "../components/Nav";
import Admin from "../components/Admin";
import { motion } from "framer-motion";
export default function AdminPanel() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
    className="bg-purple-100 h-screen flex justify-between">
      <Nav />
      <Admin/>
    </motion.div>
  );
}
