import React from "react";
import Form from "./form";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";

function AdminPanel() {
  const { admin } = useSelector((state) => state.admin);
	const envAdmin = import.meta.env.VITE_ADMIN_GOOGLE;

  return (
    <div className="h-full bg-purple-100">
      {admin ===  envAdmin? (
        <div className="h-full flex justify-center items-center flex-col">
					<LogoutButton/>
          <h1 className="text-2xl font-thin shadow-2xl">
            Welcome to admin panel!!!
          </h1>
        </div>
      ) : (
        <>
          <Form />
        </>
      )}
    </div>
  );
}

export default AdminPanel;
