import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Nav() {
  const [sidebar, setSidebar] = useState("");
  const [iconMobile, setIconMobile] = useState(false);
  const sidebarHandler = () => {
    if (sidebar === "") {
      setSidebar("hidden");
      setIconMobile(true);
    } else {
      setIconMobile(false);
      setSidebar("");
    }
    console.log(sidebar);
  };
  return (
    <div className="flex flex-no-wrap h-full shadow-2xl">
      <div
        className={`w-64 absolute sm:relative bg-violet-900 shadow md:h-full flex-col justify-between hidden sm:flex`}
      >
        <div className="px-8 h-full">
          <div className="h-16 w-full flex items-center">
            <h1 className="font-thin">HeyCurvys</h1>
          </div>
          <ul className="mt-12">
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2">Dashboard</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-white flex items-center justify-center text-xs">
                5
              </div>
            </li>
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-puzzle"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                </svg>
                <span className="text-sm  ml-2">Products</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-white flex items-center justify-center text-xs">
                8
              </div>
            </li>
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 16 10 10 16 8 14 14 8 16" />
                  <circle cx={12} cy={12} r={9} />
                </svg>
                <span className="text-sm  ml-2">Performance</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-code"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1={14} y1={4} x2={10} y2={20} />
                </svg>
                <span className="text-sm  ml-2">Deliverables</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-puzzle"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                </svg>
                <span className="text-sm  ml-2">Invoices</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-white flex items-center justify-center text-xs">
                25
              </div>
            </li>
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-stack"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
                <span className="text-sm  ml-2">Inventory</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-white hover:text-white cursor-pointer items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-sm  ml-2">Settings</span>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-48 mb-4 w-full">
            <div className="relative ">
              <div className="text-white absolute ml-4 inset-0 m-auto w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                className=" focus:outline-none rounded w-full text-sm text-white bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Search"
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
            <h1 className="font-thin text-white text-3xl animate-bounce">HeyCurvys</h1>
          </div>
          <ul className="mt-12">
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                {/* añadir icono */}
                <span className="text-base  ml-2">Inicio</span>
              </div>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                {/* añadir icono */}
                <span className="text-base  ml-2">Productos</span>
              </div>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-base  ml-2">Administracion</span>
              </div>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-base  ml-2">Inventario</span>
              </div>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-base  ml-2">Redes Sociales</span>
              </div>
            </li>
            <li className="flex shadow-sm w-full justify-between text-white hover:text-white cursor-pointer items-center">
              <div className="flex items-center">
                <span className="text-base  ml-2">Contacto</span>
              </div>
            </li>
          </ul>
          <div className="flex shadow-sm justify-center mt-20 mb-7 w-full">
            <div className="relative ">
              <input
                className="focus:outline-none rounded w-full text-base text-white bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    /*     <div className="flex">
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
                Productos
              </Link>
              <Link
                to="/profile"
                className="hover:animate-ping"
                onClick={() => setMenu(false)}
              >
                Admin. panel
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
    </div> */
  );
}

export default Nav;
