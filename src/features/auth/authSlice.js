import { createSlice } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const provider = new GoogleAuthProvider();
const initialState = {
  admin: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    googleAutheticationSuccess: (state, action) => {
      state.admin = action.payload;
    },
    logoutAdminSuccess: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const adminLogin = () => async (dispatch) => {
  try {
    const response = await signInWithPopup(auth, provider);
    dispatch(googleAutheticationSuccess(response.user.email));
    console.log(response, "ProviderResponse");
  } catch (error) {
    console.log(error);
  }
};
export const logoutAdmin = () => async (dispatch) => {
  try {
    const response = await signOut(auth);
    console.log(response, "LogoutResponse");
    dispatch(logoutAdminSuccess(""));
  } catch (error) {
    console.log(error);
  }
};

export const { googleAutheticationSuccess,logoutAdminSuccess} = adminSlice.actions;

export default adminSlice.reducer;
