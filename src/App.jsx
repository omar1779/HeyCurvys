import {Routes , Route } from "react-router-dom"
import {useEffect} from"react"
import { useDispatch } from "react-redux";
import { getAllProductsAsync } from "./features/product/productSlice";
import AnimatedRoutes from './components/AnimatedRoutes'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);
  return (
    <div className="App h-screen overflow-hidden scrollbar-hide">
      <AnimatedRoutes/>
    </div>
  )
}

export default App
