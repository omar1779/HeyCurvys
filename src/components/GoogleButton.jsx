import React from "react";
import {FcGoogle} from "react-icons/fc"
function GoogleButton() {
  return (
    <div className="flex items-center justify-center bg-white h-12 w-40 rounded-3xl shadow-2xl animate-bounce active:animate-ping">
      <FcGoogle className="h-8 w-8 pr-1" />
      <span>Google</span>
    </div>
  );
}

export default GoogleButton;