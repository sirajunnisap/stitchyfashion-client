// import React from 'react'
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import Payment from '../../Components/client/Payment/Payment';

// function PaymentPage() {

//     const initialOptions = {
//         clientId:
//           "AceAgNJeGnIkMYbdxYplnC17-7hGWkmNLqlAnIpKj_kTazSMTxnoowdbCbq3S0-3_6hEebAfN2JVWmqP",
//         currency: "USD",
//         intent: "capture",
//       };

//   return (
//     <PayPalScriptProvider options={initialOptions} onError={(err:any) => console.error('PayPal Script Error:', err)}>
//   <div>
//     <Payment />
//   </div>
// </PayPalScriptProvider>
//   )
// }

// export default PaymentPage

import React from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Payment from '../../Components/client/Payment/Payment';

function PaymentPage() {
  const initialOptions = {
    clientId: "AfxlLOag3yw7T8CcFSQyVUfLmlGbcw6S_tNDzDtzDPHYgJ1SSHu0cYXRPkhIe2f0UBNy6hPtdhthuzJv",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div>
        {/* <Payment /> */}
      </div>
    </PayPalScriptProvider>
  );
}

export default PaymentPage;