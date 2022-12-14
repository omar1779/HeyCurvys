import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/pexels1.jpg";
import image2 from "../assets/pexels2.jpg";
import image3 from "../assets/pexels3.jpg";
import image4 from "../assets/pexels4.jpg";
import image5 from "../assets/pexels5.jpg";
function Bienvenida() {
  const arrayImage = [image, image2, image3, image4, image5];
  const [carrousel, setCarrousel] = useState(0);
  const carroselCount = () => {
    setTimeout(() => {
      carrousel < arrayImage.length-1?
      setCarrousel(carrousel + 1)
      :setCarrousel(0);
    }, 500);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      carroselCount();
    }, 1500);
    return () => clearInterval(interval);
  });
  return (
    <div className="px-5 flex h-full w-full flex-col items-center justify-evenly lg:flex-row-reverse text-center 3xl:pr-20">
      <h1 className="font-thin text-violet-900 text-4xl mb-5 md:text-5xl md:mb-10 lg:text-5xl 3xl:text-5xl animate-pulse lg:hidden">
        HeyCurvys
      </h1>
      <div className="w-full h-4/6 lg:w-3/5 lg:h-4/5 2xl:w-3/6 3xl:w-2/6 bg-violet-900 rounded-lg shadow-2xl shadow-black">
        <img
          src={arrayImage[carrousel]}
          className="object-cover h-full w-full p-5 md:h-full md:w-full lg:h-full lg:w-full 3xl:h-full 3xl:w-full "
          alt="gif de bienvenida"
        />
      </div>
      <div className="flex flex-col justify-around pl-9 pr-9 3xl:h-3/5 lg:w-2/6">
        <p className="text-base md:text-xl lg:text-xl 3xl:text-xl font-thin 3xl:text-left">
          los mejores precios hoy y siempre!<br/>
        </p>
          <Link to="/contact" className="text-base md:text-xl lg:text-xl 3xl:text-xl 3xl:text-left text-violet-900 font-thin animate-pulse mt-10">
          Siguenos en nuestras redes sociales <br/> para enterarte de sobre descuentos y nuevos productos
          </Link>
      </div>
    </div>
  );
}

export default Bienvenida;