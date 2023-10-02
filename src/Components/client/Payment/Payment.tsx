import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import SuccessPage from './PaymentSuccess';
import userAxios from '../../../Axios/userAxios';
import { useNavigate } from 'react-router-dom';

interface PaymentProps {
  selectedAmount: any;
  selectedCourseId: any;
}

function Payment({ selectedAmount, selectedCourseId }: PaymentProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const [paymentCompleted, setPaymentCompleted] = useState<boolean | null>(false);

  const navigate = useNavigate();

  const handlePaymentSuccess = (details: any) => {
    // Set paymentCompleted to true when payment is successful
    setPaymentCompleted(true);

    const paymentDetails = {
      amount: selectedAmount,
      selectedCourse: selectedCourseId,
    };

    userAxios.post(`/paymentforCourse`, paymentDetails)
      .then((res) => {
        console.log("payment request success", res.data);
        // You can handle additional logic here if needed
      })
      .catch((err) => {
        console.log("payment request failed", err);
        // Handle the error, display an error message, etc.
      });

    navigate('/payment-success');
  };

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

      {paymentCompleted && <SuccessPage />}
    </div>
  );
}

export default Payment;