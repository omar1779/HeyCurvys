import React from "react";

function Bienvenida() {
  return (
    <div className="flex h-4/5 flex-col lg:flex-row items-center justify-around lg:pl-10 text-center">
      <img src="../../public/Online shopping-amico (1).svg"
			className="md:h-96 md:w-96 lg:h-64 lg:w-64"
			alt="woman" />
      <div className="flex flex-col justify-around pl-9 pr-9">
        <h1 href="#" className="font-thin text-violet-900 text-4xl mb-5 md:text-7xl md:mb-10 lg:text-5xl animate-pulse">
          HeyCurvys
        </h1>
        <p className="text-base md:text-3xl lg:text-xl font-serif">
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
