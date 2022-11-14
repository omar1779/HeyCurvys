import React from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { incrementPage, decrementPage } from "../features/product/productSlice";
import { useDispatch , useSelector } from "react-redux";
function Pagination() {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handlerNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };
  const handlerPrevPage = () => {
    setPage(page - 1);
    console.log(page);
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center w-1/5 justify-center bg-white rounded-md border border-gray-300 shadow-lg">
        <button className="text-gray-500 animate-pulse" onClick={() => dispatch(decrementPage())}>
          Prev <AiOutlineArrowLeft />
        </button>
      </div>
      <div className="flex items-center w-2/5 justify-center bg-white rounded-md border-none shadow-lg">
        <select
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none outline-none text-center focus:appearance-none active:appearance-none"
          onChange={(e) => {
            handlerCategory(e);
          }}
        >
          <option value="">Categorias</option>
          <option value="superior">superior</option>
          <option value="inferior">inferior</option>
          <option value="accesorios">accesorios</option>
          <option value="vestidos">vestidos</option>
        </select>
      </div>
      <div className="flex items-center w-1/5 justify-center bg-white rounded-md border border-gray-300 shadow-lg">
        <button className="text-gray-500 animate-pulse" onClick={() => dispatch(incrementPage())}>
          Next <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
