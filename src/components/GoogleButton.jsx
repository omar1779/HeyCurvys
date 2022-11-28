import React from "react";
import {FcGoogle} from "react-icons/fc"
function GoogleButton() {
  return (
    <div className="flex items-center justify-center bg-white h-14 w-52 rounded-3xl shadow-2xl animate-bounce active:animate-ping">
      <span className="text-3xl mr-2">Google</span>
      <FcGoogle className="h-8 w-8 pr-1 animate-pulse" />
    </div>
  );
}

export default GoogleButton;