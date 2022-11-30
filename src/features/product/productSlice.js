import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  cart: [],
  productDetail: {},
  commercialInvoice: "",
  totalPrice: 0,
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
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
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
    addProductCart: (state, action) => {
      state.cart.push(action.payload);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    removeFromCart : (state, action) => {
      state.cart = state.cart.filter((products) => products._id !== action.payload)
    },
  },
});
export const getAllProductsAsync = (page, category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:9000/get/products?page=${page}&limit=${10}&filter=${
        category || "allProducts"
      }`
    );
    dispatch(getAllProducts(response.data));
    console.log(response.data, "data de Db");
  } catch (err) {
    console.log(err);
  }
};

export const deleteProductAsync = (product) => async () => {
  try {
    const response = await axios.delete(
      `http://localhost:9000/delete?product=${product}`
    );
    console.log(response.data, "eliminado con exito");
  } catch (error) {
    console.log(error);
  }
};

export const getProductByIdAsync = (id) => async (dispatch) => {
  const parserId = await id.slice(1);
  console.log(parserId);
  try {
    const response = await axios.get(
      `http://localhost:9000/get/products/${parserId}`
    );
    dispatch(getProductDetail(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const {
  getAllProducts,
  incrementPage,
  decrementPage,
  setCategory,
  getProductDetail,
  addProductCart,
  removeFromCart
} = productSlice.actions;

export default productSlice.reducer;
