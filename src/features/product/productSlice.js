import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  page: 1,
  category: "",
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
      if (state.next === false) {
        state.page += 0;
      } else {
        state.page += 1;
      }
    },
    decrementPage: (state) => {
      if (state.prev === false) {
        state.page -= 0;
      } else {
        state.page -= 1;
      }
    },
  },
});
export const getAllProductsAsync = (page, limit,) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:9000/get/products?page=${page || 1}&limit=${limit || 10}`);
      dispatch(getAllProducts(response.data));
      console.log(response.data, "data de Db");
    } catch (err) {
      console.log(err);
    }
  };

export const { getAllProducts, incrementPage, decrementPage } =
  productSlice.actions;

export default productSlice.reducer;
