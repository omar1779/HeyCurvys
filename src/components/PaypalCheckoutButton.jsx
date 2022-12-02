import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
function PaypalCheckoutButton(props) {
  return (
    <PayPalButtons
      style={{
        color: "gold",
        layout: "vertical",
        label: "buynow",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "description del producto",
              amount: {
                value: "precio del producto",
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);
      }}
    />
  );
}

export default PaypalCheckoutButton;
