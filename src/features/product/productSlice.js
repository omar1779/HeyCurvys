import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  page: 1,
  category: "allProducts",
  nameDb: "",
  prev: false,
  next: true,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.docs;
      state.prev = action.payload.hasPrevPage;
      state.next = action.payload.hasNextPage;
    },
    incrementPage: (state) => {
      if (state.next) {
        state.page += 1;
      }
    },
    decrementPage: (state) => {
      if (state.prev) {
        state.page -= 1;
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const getAllProductsAsync =
  (page, category) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/get/products?page=${page}&limit=${
          10
        }&filter=${category}`
      );
      dispatch(getAllProducts(response.data));
      console.log(response.data, "data de Db");
    } catch (err) {
      console.log(err);
    }
  };

export const { getAllProducts, incrementPage, decrementPage , setCategory } =
  productSlice.actions;

export default productSlice.reducer;
