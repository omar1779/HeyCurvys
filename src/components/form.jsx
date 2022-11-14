import React from "react";
import GoogleButton from "./GoogleButton";
import { adminLogin } from "../features/auth/authSlice";
import { useSelector ,useDispatch } from "react-redux";
function Form() {
	const dispatch = useDispatch();
  const handlerAdmin = () => {
		dispatch(adminLogin())
  };
  return (
    <div className="h-full flex flex-col items-center justify-around">
      <div className="text-center w-full">
        <h3 className="text-2xl font-thin tracking-tight text-black">
          Panel de administracion
        </h3>
        <p className="mb-3 font-thin text-xl text-gray-800">
          Acceso solo a personal autorizado
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img src="../../public/Blueprint.png" alt="" className="h-60 w-60" />
      </div>
      <div
        className="flex justify-center w-full"
        onClick={() => {
          handlerAdmin();
        }}
      >
        <GoogleButton />
      </div>
    </div>
  );
}

export default Form;
