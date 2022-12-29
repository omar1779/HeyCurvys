import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductsList() {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="bg-white h-full flex justify-center items-center p-12 overflow-auto">
      <div className="h-full">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {products.map((products) => (
            <Link
              key={products._id}
              to={`/${products._id}`}
              className="group shadow-lg rounded-2xl shadow-gray-700"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-500 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={products.image}
                  alt={products.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="pl-2 flex justify-evenly items-center h-20">
                <h3 className="text-base text-gray-700">{products.name}</h3>
                <p className="text-lg font-medium text-gray-900">
                  {products.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
