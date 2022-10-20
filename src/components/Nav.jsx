import React from "react";

function Nav() {
  return (
    <div className="bg-violet-900 h-14 flex flex-1 items-center shadow-2xl justify-between">
      <div className="flex">
        <img
          src="../../public/Niche service marketplace-amico.svg"
          className="h-10 w-10 rounded-md mr-5"
        />
        <h1 className="text-white text-2xl font-thin">HeyCurvys</h1>
      </div>
      <div className="flex h-10">
        <button>
					<img src="../../public/lista.png" alt="menu"
					className="h-10 w-10 white"
					/>
				</button>
      </div>
    </div>
  );
}

export default Nav;
