import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillShopping, AiFillProfile } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
function Nav() {

  const [sidebar, setSidebar] = useState("");
  const [iconMobile, setIconMobile] = useState(false);
  const envAdmin = import.meta.env.VITE_ADMIN_GOOGLE;
  const { user } = useSelector((state) => state.admin);
  console.log(user.email)
  const sidebarHandler = () => {
    if (sidebar === "") {
      setSidebar("hidden");
      setIconMobile(true);
    } else {
      setIconMobile(false);
      setSidebar("");
    }
  };
  return (
    <div className="flex flex-no-wrap h-full shadow-2xl">
      <div
        className={`w-64 absolute sm:relative bg-violet-900 shadow md:h-full flex-col justify-between hidden sm:flex`}
      >
        <div className="px-8 h-full">
          <div className="h-16 w-full shadow-sm flex items-center">
            <h1 className="font-thin text-white text-3xl animate-bounce">
              HeyCurvys
            </h1>
          </div>
          <ul className="mt-12">
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/">
                <div className="flex items-center">
                  <AiFillHome />
                  <span className="text-base  ml-2">Inicio</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/products">
                <div className="flex items-center">
                  <AiFillShopping />
                  <span className="text-base  ml-2">Productos</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/profile">
                <div className="flex items-center">
                  <AiFillProfile />
                  <span className="text-base  ml-2">Perfil</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/cart">
                <div className="flex items-center">
                  <BsFillCartCheckFill />
                  <span className="text-base  ml-2">Carrito de compras</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/contact">
                <div className="flex items-center">
                  <IoShareSocialSharp />
                  <span className="text-base  ml-2">Redes Sociales</span>
                </div>
              </Link>
            </li>
            {user.email ===  envAdmin?
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center">
              <Link to="/admin">
                <div className="flex items-center">
                  <RiAdminFill />
                  <span className="text-base  ml-2">Administracion</span>
                </div>
              </Link>
            </li>
            :<></>
          }
          </ul>
          <div className="flex justify-center mt-20 mb-4 w-full">
            <div className="relative ">
              <input
                className=" focus:outline-none rounded w-full text-sm text-black bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Buscar"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-64 z-40 absolute bg-violet-900 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        {iconMobile ? (
          <div
            className={`h-10 w-10 bg-violet-900 animate-pulse absolute inset-y-0 top-0 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler`}
            onClick={() => sidebarHandler()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={6} cy={10} r={2} />
              <line x1={6} y1={4} x2={6} y2={8} />
              <line x1={6} y1={12} x2={6} y2={20} />
              <circle cx={12} cy={16} r={2} />
              <line x1={12} y1={4} x2={12} y2={14} />
              <line x1={12} y1={18} x2={12} y2={20} />
              <circle cx={18} cy={7} r={2} />
              <line x1={18} y1={4} x2={18} y2={5} />
              <line x1={18} y1={9} x2={18} y2={20} />
            </svg>
          </div>
        ) : (
          <div
            className={`h-10 w-10 bg-violet-900 animate-pulse absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
        id="mobile-toggler ${sidebar}`}
            onClick={() => sidebarHandler()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={6} cy={10} r={2} />
              <line x1={6} y1={4} x2={6} y2={8} />
              <line x1={6} y1={12} x2={6} y2={20} />
              <circle cx={12} cy={16} r={2} />
              <line x1={12} y1={4} x2={12} y2={14} />
              <line x1={12} y1={18} x2={12} y2={20} />
              <circle cx={18} cy={7} r={2} />
              <line x1={18} y1={4} x2={18} y2={5} />
              <line x1={18} y1={9} x2={18} y2={20} />
            </svg>
          </div>
        )}
        <div className={`px-8 ${sidebar} h-screen`}>
          <div className="h-16 w-full shadow-sm flex items-center">
            <h1 className="font-thin text-white text-3xl animate-bounce">
              HeyCurvys
            </h1>
          </div>
          <ul className="mt-12">
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/">
                <div className="flex items-center">
                  <AiFillHome />
                  <span className="text-base  ml-2">Inicio</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/products">
                <div className="flex items-center">
                  <AiFillShopping />
                  <span className="text-base  ml-2">Productos</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/profile">
                <div className="flex items-center">
                  <AiFillProfile />
                  <span className="text-base  ml-2">Perfil</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/cart">
                <div className="flex items-center">
                  <BsFillCartCheckFill />
                  <span className="text-base  ml-2">Carrito de compras</span>
                </div>
              </Link>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <Link to="/contact">
                <div className="flex items-center">
                  <IoShareSocialSharp />
                  <span className="text-base  ml-2">Redes Sociales</span>
                </div>
              </Link>
            </li>
            {user.email ===  envAdmin?
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center">
              <Link to="/admin">
                <div className="flex items-center">
                  <RiAdminFill />
                  <span className="text-base  ml-2">Administracion</span>
                </div>
              </Link>
            </li>
            :<></>
          }
          </ul>
          <div className="flex shadow-sm justify-center mt-20 mb-7 w-full">
            <div className="relative ">
              <input
                className="focus:outline-none rounded w-full text-base text-black bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Buscar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
