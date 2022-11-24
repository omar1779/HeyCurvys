import React from "react";
import Nav from "../components/Nav"
import { motion } from "framer-motion";
function Contact() {
  return <motion.div
  initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
  className="bg-Social bg-no-repeat sm:bg-center md:bg-right bg-right bg-contain h-screen">
    <Nav/>
  </motion.div>;
}

export default Contact;
