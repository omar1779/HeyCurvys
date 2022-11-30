import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import ProductCart from "../components/ProductCart";
function Cart() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition: {duration: 0.2}}}
    className="bg-purple-100 h-full flex justify-between">
      <Nav />
      <ProductCart/>
    </motion.div>
  );
}

export default Cart;
