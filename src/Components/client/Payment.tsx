import React from 'react'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

function Payment(selectedAmount: any) {

  console.log(selectedAmount, "selected amount")
  const [{ isPending }] = usePayPalScriptReducer();

  const handlePaymentSuccess = (details: any) => {
    console.log(details, "details")
  }
  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: selectedAmount,
                  currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions: any) => {
          return actions.order.capture().then(handlePaymentSuccess);
        }}
        style={{ layout: "horizontal" }}
        disabled={isPending}
      />
    </div>
  )
}

export default Payment
