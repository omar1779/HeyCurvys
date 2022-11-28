import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Detail from "../components/Detail";
function DetailProduct() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-purple-100 h-full flex justify-between"
    >
      <Nav />
      <Detail/>
    </motion.div>
  );
}

export default DetailProduct;
