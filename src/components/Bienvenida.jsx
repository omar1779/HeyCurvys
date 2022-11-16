import React from "react";
import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <div className="flex h-full flex-col lg:flex-row items-center justify-around lg:pl-10 text-center">
      <img src="../../public/Online shopping-amico (1).svg"
			className="h-80 w-80 md:h-96 md:w-96 lg:h-64 lg:w-64 3xl:h-96 3xl:w-96 3xl:mr-32 3xl:ml-32"
			alt="woman" />
      <div className="flex flex-col justify-around pl-9 pr-9 3xl:h-3/5">
        <Link to="/products">
          <h1 href="#" className="font-thin text-violet-900 text-4xl mb-5 md:text-7xl md:mb-10 lg:text-5xl 3xl:text-8xl animate-pulse">
            HeyCurvys
          </h1>
        </Link>
        <p className="text-base md:text-3xl lg:text-xl 3xl:text-3xl font-serif 3xl:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maxime deserunt doloremque voluptatum ad perferendis nemo amet, enim
          porro sapiente? Vero laborum dolorum consectetur nulla architecto ab
          consequatur reiciendis cupiditate.
        </p>
      </div>
    </div>
  );
}

export default Bienvenida;
