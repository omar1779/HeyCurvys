import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import admin from "../features/auth/authSlice"
export const store = configureStore({
  reducer: {
    products: productReducer,
    admin: admin
  },
});
