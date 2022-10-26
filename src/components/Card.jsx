import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Card({name, img , price}) {
  return (
    <div className="flex flex-col bg-gray-50 border-gray-300 rounded-lg border shadow-2xl md:flex-row md:max-w-xl mb-5">
      <img
        className="object-contain w-full h-full rounded-t-xl md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shadow-sm"
        src="https://firebasestorage.googleapis.com/v0/b/test-1-8d5b9.appspot.com/o/pexels-jesús-eca-6837634.jpg?alt=media&token=3efd883b-9b08-427b-91af-ac77ee9599bb"
        alt="product-image-HeyCurvys.com"
      />
      <div className="flex justify-between p-4 items-end">
        <div className="flex justify-center items-center flex-col">
          <h3 className="mb-2 text-2xl font-thin tracking-tight text-black">
            <strong>Name test</strong>
          </h3>
          <p className="mb-3 font-thin text-lg text-gray-800">
            Price : 20$
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <FaShoppingCart className="h-8 w-8" />
          <p className="mb-3 font-thin text-lg text-gray-800">add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
