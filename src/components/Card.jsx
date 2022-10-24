import React from "react";
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"

function Card() {
  return (
      <div
        className="flex flex-col bg-slate-100 rounded-lg border shadow-md md:flex-row md:max-w-xl mb-5">
        <img
          className="object-cover w-full h-full rounded-t-xl md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shadow-sm"
          src="https://firebasestorage.googleapis.com/v0/b/test-1-8d5b9.appspot.com/o/WhatsApp%20Image%202022-10-22%20at%2011.14.31%20PM.jpeg?alt=media&token=a5d8a21c-e881-4efb-92f2-ff41aa919b63"
          alt=""
        />
        <div className="flex justify-between p-4 items-center">
					<div className="flex justify-center items-center flex-col">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
							Name test
						</h5>
						<p className="mb-3 font-normal text-lg text-gray-800">
							Price : 20$
						</p>
					</div>
					<div className="flex justify-center items-center flex-col">
						<FaShoppingCart className="h-8 w-8"/>
						<p className="mb-3 font-normal text-lg text-gray-800">
							add to cart
						</p>
					</div>
        </div>
      </div>
  );
}

export default Card;
