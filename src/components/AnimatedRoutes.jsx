import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/Home";
import Products from "../page/Products.jsx";
import DetailProduct from "../page/DetailProduct.jsx";
import Profile from "../page/Profile";
import AdminPanel from "../page/AdminPanel";
import Cart from "../page/Cart";
import Contact from "../page/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* <Route path='' element={<LandingPage/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products:id" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
