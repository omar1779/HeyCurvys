import React from "react";
import { useDispatch } from "react-redux";
import { modalActive } from "../features/product/productSlice";
import {motion} from "framer-motion"
function Modal(props) {
	const dispatch = useDispatch()
  return (
    <motion.div
		initial={{opacity: 0}}
		animate={{ rotate:360, scale: 1.1 , opacity: 1}}
    exit={{rotate:360, scale: 0.5, opacity: 0  }}
		className="h-1/6 w-2/6 md:w-2/5 lg:w-2/5 rounded-xl absolute bg-violet-900 shadow-2xl shadow-black flex flex-col justify-evenly items-center">
      <h1 className="text-center text-white font-thin text-lg lg:text-xl xl:text-2xl">
        {props.title}
      </h1>
      <button onClick={()=>dispatch(modalActive())} className="bg-white h-1/6 w-2/5 rounded-xl">{props.button}</button>
    </motion.div>
  );
}

export default Modal;
