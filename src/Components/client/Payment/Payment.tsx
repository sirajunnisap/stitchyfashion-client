import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import SuccessPage from './PaymentSuccess';
import userAxios from '../../../Axios/userAxios';
import { useNavigate } from 'react-router-dom';
// import PaymentSuccessPage from './PaymentSuccessPage'; // Import your PaymentSuccessPage component

interface PaymentProps {
  selectedAmount: any;
  selectedCourseId : any;
}

function Payment({ selectedAmount,selectedCourseId }: PaymentProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const [paymentCompleted, setPaymentCompleted] = useState<boolean|null>(false);


  const navigate = useNavigate()
  const handlePaymentSuccess = (details: any) => {

    console.log(details, "payment completed successfully");
    // Set paymentCompleted to true when payment is successful
    setPaymentCompleted(true);

    const paymentDetails = {
      amount : selectedAmount,
      selectedCourse : selectedCourseId 
    } 

console.log(paymentDetails,"payment detailslllllllllll")
    userAxios.post(`/paymentforCourse`,paymentDetails).then((res)=>[
      console.log("payment request success",res.data)
      
    ]).catch((err)=>{
      console.log("payment request failed ",err);
      
    })

    navigate('/payment-success')
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
        onApprove={(data, actions:any) => {
          return actions.order.capture().then(handlePaymentSuccess);
        }}
        style={{ layout: "horizontal" }}
        disabled={isPending}
      />

      {paymentCompleted && <SuccessPage />}
    </div>
  );
}
export default Payment;