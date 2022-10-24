import React from "react";
import {BsSearch} from "react-icons/bs"
import Pagination from "./Pagination"
function Search() {
  return (
      <div className="h-1/6 pl-5 pr-5 bg-purple-100">
        <form>
          <div className="relative mb-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<BsSearch/>
            </div>
            <input
							onChange={(e)=>console.log(e.target.value)}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-lg"
              placeholder="Search Products"
              required
            />
            <button
							onClick={(e)=>{
								e.preventDefault();
							}}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-violet-900 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
				<Pagination/>
      </div>
  );
}

export default Search;
