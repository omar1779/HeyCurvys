import React from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import {removeFromCart} from "../features/product/productSlice"
import { BsFillTrashFill, BsFillArrowDownSquareFill } from "react-icons/bs";

function ProductCart() {
	const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.products);
  const total = cart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const format = total.toLocaleString("es", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="overflow-auto w-full  h-full flex items-center flex-col sm:p-4 text-black">
      <h2 className="mb-4 text-4xl font-thin text-black text-center">
        Carrito de compras HeyCurvys
      </h2>
      {cart.length === 0 ? (
        <h2 className="mb-4 text-2xl font-thin text-black text-center animate-pulse">
          No tienes ningun producto añadido en el carrito de compras,
          <Link to="/products" className="text-violet-900 font-bold">VAMOS DE COMPRAS!!!</Link>
        </h2>
      ) : (
        <h2 className="mb-4 text-2xl font-thin text-black text-center">
          Compra tus productos aqui
        </h2>
      )}
      {cart?.map((elements) => (
        <div className="w-5/6 lg:w-4/6 h-16 mb-4" key={elements._id}>
          <div className="border-b border-opacity-20 rounded-xl border-gray-700 bg-violet-900 text-white flex justify-between px-10 items-center h-full">
            <p>{elements.name}</p>
            <div className="pr-3 pl-3 pb-1">
              <img
                className="object-cover w-12 h-12 rounded-full"
                src={elements.image}
                alt={elements.name}
              />
            </div>
            <div className="pr-3 pl-3 pb-1">
              <p>{elements.price}</p>
            </div>
            <div className="text-center">
              <BsFillTrashFill
                className="cursor-pointer w-7
              h-7 rounded-full"
                onClick={() => dispatch(removeFromCart(elements._id))}
              />
            </div>
          </div>
        </div>
      ))}
      {cart.length === 0 ? (
        <></>
      ) : (
        <div className="flex justify-center items-center bg-white rounded-3xl w-4/6">
          <BsFillArrowDownSquareFill className="mx-8 h-8 w-10 text-violet-900 animate-bounce" />
          <h2 className="my-4 text-2xl font-bold text-violet-900 text-center animate-pulse">
            Total del carrito {format}
          </h2>
          <BsFillArrowDownSquareFill className="mx-8 h-8 w-10 text-violet-900 animate-bounce" />
        </div>
      )}
    </div>
  );
}

export default ProductCart;
