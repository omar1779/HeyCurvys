import React, {useState} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {BsFillFilterSquareFill} from "react-icons/bs"
import { useDispatch } from "react-redux";
import { incrementPage,decrementPage,setCategory , getProductByNameAsync } from "../features/product/productSlice";
function Pagination() {
  const [search , setSearch] = useState("")
  const dispatch = useDispatch()
  const handleSearchName = (e) => {
    dispatch(getProductByNameAsync(search))
  }
  return (
    <div className="flex flex-col ">
      <h1 className="text-white mb-2 flex items-center "><BsFillFilterSquareFill className="mr-2"/>Paginacion</h1>
      <div className="flex justify-around mb-3 bg-white rounded-md border border-gray-300 shadow-lg active:bg-violet-400">
        <button onClick={() => dispatch(decrementPage())} className="text-gray-500 text-left hover:animate-ping">
          anterior<AiOutlineArrowLeft />
        </button>
        <button  onClick={() => dispatch(incrementPage())} className="text-gray-500 text-right hover:animate-ping flex flex-col items-end">
          siguiente<AiOutlineArrowRight/>
        </button>
      </div>
      <div className="flex items-center justify-center bg-white rounded-md border-none shadow-lg">
        <select
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none outline-none text-center focus:appearance-none active:appearance-none active:bg-violet-400"
          onChange={(e) => {
            dispatch(setCategory(e.target.value))
          }}
        >
          <option value="allProducts">Todos los productos</option>
          <option value="superior">superior</option>
          <option value="inferior">inferior</option>
          <option value="accesorios">accesorios</option>
          <option value="vestidos">vestidos</option>
        </select>
      </div>
      <div className="flex justify-center mt-3 mb-4 w-full">
            <div className="flex flex-col">
              <input
                className=" focus:outline-none rounded w-full text-sm text-black bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Buscar productos"
                onChange={(e)=> setSearch(e.target.value)}
              />
            <button
            onClick={handleSearchName}
            className="mt-3 rounded w-full text-sm text-white hover:bg-gray-500 focus:bg-gray-800 bg-gray-600 py-2">Buscar</button>
            </div>
          </div>
    </div>
  );
}

export default Pagination;
