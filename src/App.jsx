import {useEffect} from"react"
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "./features/product/productSlice";
import AnimatedRoutes from './components/AnimatedRoutes'
function App() {
  const dispatch = useDispatch();
  const {page} = useSelector((state)=>state.products)
  const {category} = useSelector((state)=>state.products)
  console.log(category)
  useEffect(() => {
    dispatch(getAllProductsAsync(page,category));
  }, [page,category]);
  return (
    <div className="App h-screen overflow-hidden scrollbar-hide">
      <AnimatedRoutes/>
    </div>
  )
}

export default App
