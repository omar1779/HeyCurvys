import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Card({ name, img, price ,id }) {
  return (
    <div className="flex flex-col bg-gray-50 border-gray-300 rounded-lg border shadow-2xl md:flex-row md:max-w-xl mb-5">
      <img
        className="object-contain w-full h-full rounded-t-xl md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shadow-sm"
        src={img}
        alt="product-image-HeyCurvys.com"
      />
      <div className="flex justify-between p-4 items-end">
        <div className="flex justify-center flex-col">
          <h3 className="mb-2 text-lg text-left font-thin tracking-tight text-black">
            <strong>{name}</strong>
          </h3>
          <p className="mb-3 font-thin text-lg text-left text-gray-800">
            Precio : {price}$
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <FaShoppingCart className="h-8 w-8" />
          <p className="mb-3 font-thin text-lg text-gray-800">añadir al carrito</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
