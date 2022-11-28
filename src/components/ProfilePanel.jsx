import React from "react";
import Form from "./form";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import Ilustration from "./Ilustration";

function ProfilePanel() {
  const { user } = useSelector((state) => state.admin);
  console.log(user)
  return (
    <div className="h-full flex flex-col lg:flex-row lg:justify-evenly justify-center items-center bg-purple-100">
      {user.email? (
        <>
        <Ilustration/>
        <div className="h-2/4 flex justify-around items-center flex-col">
          <h1 className="font-thin text-center text-violet-900 rounded-sm shadow-gray-400 text-4xl lg:text-5xl">
            Te damos la bienvenida,<br /> {user.displayName}
          </h1>
          <img className="h-20 w-20 rounded-full shadow-2xl shadow-black" src={user.photoURL}/>
					<LogoutButton/>
        </div>
        </>
      ) : (
          <Form/>
      )}
    </div>
  );
}

export default ProfilePanel;
