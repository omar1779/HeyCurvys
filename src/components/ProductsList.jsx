import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Search from "./Search";
import Sidebar from "./Sidebar";
import { getAllProductsAsync } from "../features/product/productSlice";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const page = useSelector(state => state.products.page)
  const [navbar, setNavbar] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);
  const handlerSidebarLeft = () => {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  return (

            <div className="flex flex-col lg:flex-row-reverse h-full 3xl:flex-row bg-transparent">
            {navbar === false ? (
              <div className="flex justify-center lg:hidden">
                <AiOutlineArrowDown
                  className={`h-8 w-8 animate-bounce hover:animate-ping cursor-pointer`}
                  onClick={() => handlerSidebarLeft()}
                />
              </div>
            ) : (
              <></>
            )}
            <div
              className={`h-full p-5 flex flex-col overflow-scroll
          lg:w-4/5 3xl:w-4/5 3xl:h-auto ${navbar ? "hidden" : "flex"}`}
            >
              {products?.map((e) => (
                <div key={e._id}>
                  <Card key={e._id} name={e.name} img={e.image} price={e.price} />
                </div>
              ))}
            </div>
            {navbar && (
              <div
                className={`h-4/5 w-full md:h-3/5 absolute lg:w-1/5 flex flex-col justify-between items-center bottom-auto top-auto mb-1 3xl:w-1/5 3xl:h-auto 3xl:m-0`}
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
                <div className="h-1/5 flex justify-center items-end md:items-start">
                  <AiOutlineArrowUp
                    className="h-8 w-8 animate-bounce hover:animate-ping cursor-pointer"
                    onClick={() => handlerSidebarLeft()}
                  />
                </div>
              </div>
            )}
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
          </div>
  );
}

export default ProductsList;
