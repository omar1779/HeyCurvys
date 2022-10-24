import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex">
      <div className="bg-violet-900 h-14 md:h-28 3xl:h-20 pl-5 flex flex-1 items-center justify-between">
        <div className="flex items-center ">
          <img
            src="../../public/Niche service marketplace-amico.svg"
            className="h-10 w-10 rounded-md mr-5 md:w-16 md:h-16"
          />
          <h1 className="text-white text-2xl font-thin md:text-4xl">
            HeyCurvys
          </h1>
        </div>
        <div className="flex h-12 items-center">
          <SlMenu
            className="animate-pulse h-8 w-8 mr-5 text-white duration-200 hover:rotate-180"
            onClick={() => {
              menu ? setMenu(false) : setMenu(true);
              console.log(menu);
            }}
          />
        </div>
      </div>
      <div className="flex justify-end">
        {menu ? (
          <div className="shadow-2xl mt-14 md:mt-28 3xl:mt-20 fixed z-50 h-32 flex justify-end bg-transparent ease-in duration-300">
            <div className="font-thin text-md md:text-lg w-32 pr-6 rounded-bl-3xl flex flex-col justify-evenly bg-violet-900 text-right text-white shadow-2xl">
              <Link
                to="/"
                className="hover:animate-ping"
                onClick={() => setMenu(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:animate-ping"
                onClick={() => setMenu(false)}
              >
                Products
              </Link>
              <Link
                to="/profile"
                className="hover:animate-ping"
                onClick={() => setMenu(false)}
              >
                Profile
              </Link>
              <Link
                to="/Cart"
                className="hover:animate-ping"
                onClick={() => setMenu(false)}
              >
                <FaShoppingCart className="ml-auto" />
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Nav;
