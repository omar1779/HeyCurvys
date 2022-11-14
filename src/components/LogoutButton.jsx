import React from "react";
import { SlLogout } from "react-icons/sl";
import {useDispatch} from "react-redux"
import {logoutAdmin} from "../features/auth/authSlice"
function LogoutButton() {
	const dispatch = useDispatch()
	const logout 	= () => {
		dispatch(logoutAdmin())
	}
  return (
    <div onClick={()=>logout()} className="flex items-center justify-center text-white bg-violet-900 h-12 w-40 rounded-3xl shadow-2xl animate-bounce cursor-pointer active:animate-ping">
      <SlLogout className="h-8 w-8 mr-5" />
      <span>Logout</span>
    </div>
  );
}

export default LogoutButton;
