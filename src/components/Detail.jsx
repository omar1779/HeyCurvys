import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductByIdAsync } from "../features/product/productSlice";
import {BsFillCartCheckFill} from "react-icons/bs"

function Detail() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByIdAsync(location.pathname));
  }, [dispatch]);
  const { productDetail } = useSelector((state) => state.products);
  return (
    <div className="flex h-full w-full lg:flex-row items-center justify-center lg:pl-10 p-5">
      <div className="bg-white p-5 rounded-2xl shadow-2xl">
        <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-500 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h3 className="mt-4 text-3xl font-thin text-violet-900 underline">
              {productDetail.name}
            </h3>
            <p className="mt-1 text-xl font-thin  text-gray-900">
              categoria : {productDetail.category}
            </p>
            <p className="mt-1 text-lg font-thin text-gray-500">
              descripcion : {productDetail.description} Lorem ipsum
              amet consectetur adipisicing elit. Reiciendis culpa, accusantium
            </p>
            <p className="mt-1 text-lg font-thin text-gray-500">
              stock disponible : {productDetail.stock}
            </p>
            <p className="mt-1 text-3xl font-thin text-gray-900">
            $ {productDetail.price}
            </p>
          </div>
          <div className="flex items-center justify-center cursor-pointer bg-slate-200 rounded-xl">
            <p className="text-2xl font-thin text-gray-900 mr-4 animate-pulse">añadir al carrito</p>
            <BsFillCartCheckFill className="h-8 w-8 animate-bounce"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
