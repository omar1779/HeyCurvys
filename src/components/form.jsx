import React from "react";
import GoogleButton from "./GoogleButton";
import { adminLogin } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import img from "../../public/Blueprint.png"
function Form() {
  const dispatch = useDispatch();
  const handlerAdmin = () => {
    dispatch(adminLogin());
  };
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-around lg:justify-evenly">
      <div className="text-center w-full h-auto flex flex-col items-center">
        <h1 className="text-6xl mb-5 font-thin text-black">
          Perfil de usuario
        </h1>
        <p className="mb-3 pb-5 font-thin text-3xl text-gray-800 text-center">
          Crea o Inicia un usuario con Google
        </p>
        <div
          className="flex justify-center w-full"
          onClick={() => {
            handlerAdmin();
          }}
        >
          <GoogleButton />
        </div>
      </div>
      <div className="w-full lg:h-full flex justify-center items-center">
        <img src={img} alt="" className="h-64 w-64 lg:h-80 lg:w-80" />
      </div>
    </div>
  );
}

export default Form;
