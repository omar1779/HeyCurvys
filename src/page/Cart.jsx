import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
function Cart() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
    className="bg-HeyCurvys bg-no-repeat bg-center bg-contain h-screen">
      <Nav />
    </motion.div>
  );
}

export default Cart;
