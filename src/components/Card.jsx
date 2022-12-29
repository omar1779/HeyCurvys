import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Card({ name, img, price, id }) {
  return (
    <div className="bg-white shadow-2xl">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a key={id} href="#" className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={img}
                alt={name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
          </a>
            <div className="w-full p-5">
              <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
            </div>
        </div>
      </div>
    </div>
    /* <div className="flex flex-col bg-gray-50 border-gray-300 rounded-lg border shadow-2xl md:flex-row md:max-w-xl mb-5">
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
    </div> */
  );
}

export default Card;
