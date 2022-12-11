import React from "react";
import Nav from "../components/Nav"
import About from "../components/About";
import { motion } from "framer-motion";
function Contact() {
  return <motion.div
  initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
  className="bg-purple-100 h-full flex justify-between">
    <Nav/>
    <About/>
  </motion.div>;
}

export default Contact;
