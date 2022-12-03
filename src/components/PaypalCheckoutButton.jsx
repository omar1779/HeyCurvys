import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PaypalCheckoutButton() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.products);
  const total = cart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(total);
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleAprove = (orderID) => {
    //call backend function to fullfill order
    // if response is successful
    try {
      setPaidFor(true);
    } catch (error) {
      setError(error);
      // if response is not successful
      alert(
        "order is not completed , contact support @HeyCurvys.com for further information",
        error.message
      );
    }
  };
  if (paidFor) {
    return alert("Thank you for your purchase");
  }
  if (error) {
    return alert(error);
  }
  return (
    <PayPalButtons
      style={{
        color: "gold",
        layout: "vertical",
        label: "buynow",
      }}
      onClick={(data, actions) => {
        if (total === 0) {
          setError("el carrito de compras esta vacio");
          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "description del producto",//FALTA ESTADO DE FACTURA
              amount: {
                value: total, //añadir el punto en valor del product
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);
        handleAprove(data.orderID);
      }}
      onCancel={() => {
        navigate("/cart");
      }}
      onError={(err) => {
        setError(err);
        console.error("Paypal Checkout", err);
      }}
    />
  );
}

export default PaypalCheckoutButton;
