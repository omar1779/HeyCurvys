import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/home.gif"
function Bienvenida() {
  return (
    <div className="flex h-full flex-col lg:flex-row items-center justify-around lg:pl-10 text-center 3xl:pr-20">
      <img src={logo}
			className="h-80 w-80 md:h-96 md:w-96 lg:h-64 lg:w-64 3xl:h-3/5 3xl:w-3/5"
			alt="gif de bienvenida" />
      <div className="flex flex-col justify-around pl-9 pr-9 3xl:h-3/5">
        <Link to="/products">
          <h1 href="#" className="font-thin text-violet-900 text-4xl mb-5 md:text-7xl md:mb-10 lg:text-5xl 3xl:text-8xl animate-pulse">
            HeyCurvys
          </h1>
        </Link>
        <p className="text-base md:text-3xl lg:text-xl 3xl:text-3xl font-serif 3xl:text-left animate-bounce font-thin">
          Proyecto en version BETA 1.1
        </p>
      </div>
    </div>
  );
}

export default Bienvenida;
