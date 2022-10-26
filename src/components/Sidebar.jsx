import React from "react";
import Search from "./Search";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Sidebar({ sidebar, setSidebar }) {
  return (
    <div>
      {sidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-5 top-6 z-50"
          onClick={() => setSidebar(!sidebar)}
        >
          x
        </button>
      ) : (
        <HiOutlineMenuAlt1
          onClick={() => setSidebar(!sidebar)}
          className="fixed hidden z-30 lg:flex items-center cursor-pointer right-5 bg-violet-900 text-gray-50 h-9 w-9 animate-pulse hover:animate-ping rounded-bl-xl"
        />
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-gray-900 bg-opacity-90  p-10 pl-5 text-white fixed h-full z-40 ease-in duration-700
				${sidebar ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div
          className={`h-full w-full flex flex-col justify-between items-center`}
        >
          <div className="h-2/5 w-full">
            <Search />
          </div>
          <div className="h2/5">
            <img
              src="../../public/Catalogue-amico.svg"
              className="h-80 w-80 md:h-96 md:w-96 lg:h-52 lg:w-52 3xl:h-96 3xl:w-96 3xl:mr-32 3xl:ml-32"
              alt="woman"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
