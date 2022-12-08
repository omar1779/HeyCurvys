import { useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "./features/product/productSlice";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProductsAsync(page, category));
  }, [dispatch, page, category]);
  return (
    <div className="App h-screen overflow-hidden scrollbar-hide">
      <PayPalScriptProvider
        options={{
          "client-id":
          import.meta.env.VITE_PAYPAL_CLIENT_ID
        }}
      >
        <AnimatedRoutes />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
