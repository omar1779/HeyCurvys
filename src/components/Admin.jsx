import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { deleteProductAsync } from "../features/product/productSlice";
import CreateProduct from "./CreateProduct"
function Admin() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(false)
  const { products } = useSelector((state) => state.products);
  return (
    <div className="overflow-auto w-full p-4 md:px-20 lg:px-32 h-full flex flex-col text-black justify-center">
      <div className="flex justify-around items-center mb-4">
        <h2 className="text-2xl font-thin text-black text-center">
          Panel de administracion
        </h2>
        <BsArrowUpRight onClick={()=> form? setForm(false) : setForm(true)} className="text-violet-900 h-6 w-6 animate-ping cursor-pointer"/>
      </div>
      {form ? <CreateProduct/> :
      <>
      {products?.map((elements) => (
        <div className="w-full h-full mb-4" key={elements._id}>
          <div className="border-b border-opacity-20 rounded-xl border-gray-700 bg-purple-300 flex justify-between px-10 items-center h-full">
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
              <AiFillDelete
                className="text-violet-900 cursor-pointer w-7 h-7 rounded-full"
                onClick={() => dispatch(deleteProductAsync(elements.name))}
              />
            </div>
          </div>
        </div>
      ))}
      </>
      }
    </div>
  );
}

export default Admin;
