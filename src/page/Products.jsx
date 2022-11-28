import React from "react";
import Nav from "../components/Nav";
import ProductsList from "../components/ProductsList";
import { useSelector,} from "react-redux";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
function Products() {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      {products.length === 0 ? (
        <Loader/>
      ) : (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition: {duration: 0.2}}}
        className="bg-purple-100 h-full flex justify-between">
          <Nav />
          <ProductsList />
        </motion.div>
      )}
    </>
  );
}

export default Products;
