import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductByIdAsync, addProductCart } from "../features/product/productSlice";
import {BsFillCartCheckFill} from "react-icons/bs"

function Detail() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByIdAsync(location.pathname));
  }, [dispatch]);
  const { productDetail } = useSelector((state) => state.products);
  return (
    <div className="flex h-full w-full overflow-auto lg:flex-row items-center justify-center p-5 xl:p-20 bg-gray-200">
      <div className="bg-white p-5 rounded-2xl shadow-2xl lg:flex">
        <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-500 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-col lg:pl-10 lg:justify-evenly">
          <div>
            <h3 className="mt-4 text-2xl md:text-4xl xl:text-5xl  font-thin text-violet-900 underline">
              {productDetail.name}
            </h3>
            <p className="mt-1 xl:mt-4 text-lg font-thin md:text-2xl xl:text-3xl  text-gray-900">
              categoria : {productDetail.category}
            </p>
            <p className="mt-1 text-sm md:text-2xl xl:text-3xl xl:mt-5 font-thin text-gray-500">
              descripcion : {productDetail.description} Lorem ipsum
              amet consectetur adipisicing elit. Reiciendis culpa, accusantium
            </p>
            <p className="mt-1 text-sm md:text-xl xl:text-3xl xl:mt-5 font-thin text-gray-500">
              stock disponible : {productDetail.stock}
            </p>
            <p className="mt-1 text-end text-lg md:text-4xl xl:text-5xl xl:mt-5 font-thin text-gray-900">
            $ {productDetail.price}
            </p>
          </div>
          <div onClick={()=>{
            dispatch(addProductCart(productDetail))
          }} className="flex items-center justify-center cursor-pointer bg-violet-900 rounded-xl mt-4 xl:h-20 shadow-2xl  active:bg-violet-500 hover:bg-violet-500">
            <p className="text-2xl md:text-4xl font-thin text-white mr-4 animate-pulse">añadir al carrito</p>
            <BsFillCartCheckFill className="h-8 w-8 animate-bounce text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
