import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Pagination() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center w-1/5 justify-center bg-white rounded-md border border-gray-300 shadow-lg">
        <p className="text-gray-500">Prev <AiOutlineArrowLeft /></p>
      </div>
      <div className="flex items-center w-2/5 justify-center bg-white rounded-md border-none shadow-lg">
        <select
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none outline-none text-center focus:appearance-none active:appearance-none"
        >
          <option value="DEFAULT">Choose a category</option>
          <option value="US">test 1</option>
          <option value="CA">test 2</option>
          <option value="FR">test 3</option>
          <option value="DE">test 4</option>
        </select>
      </div>
      <div className="flex items-center w-1/5 justify-center bg-white rounded-md border border-gray-300 shadow-lg">
        <p className="text-gray-500">Next <AiOutlineArrowRight/></p>
      </div>
    </div>
  );
}

export default Pagination;
