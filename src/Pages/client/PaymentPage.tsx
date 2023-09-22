import React from 'react'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Payment from '../../Components/client/Payment';

function PaymentPage() {

    const initialOptions = {
        clientId:
          "AceAgNJeGnIkMYbdxYplnC17-7hGWkmNLqlAnIpKj_kTazSMTxnoowdbCbq3S0-3_6hEebAfN2JVWmqP",
        currency: "USD",
        intent: "capture",
      };

  return (
    <PayPalScriptProvider options={initialOptions}>
    <div>
      <Payment />
    </div>
  </PayPalScriptProvider>
  )
}

export default PaymentPage
