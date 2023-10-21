import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import SuccessPage from './PaymentSuccess';
import userAxios from '../../../Axios/userAxios';
import { useNavigate } from 'react-router-dom';

interface PaymentProps {
  selectedAmount: any;
  selectedCourseId: any;
  designerId:any
}

function Payment({ selectedAmount, selectedCourseId, designerId }: PaymentProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const [paymentCompleted, setPaymentCompleted] = useState<boolean | null>(false);
const [paymentedData,setPaymentedData] = useState<any>()
const [isModalOpen,setIsModalOpen] =useState(false)
   const navigate = useNavigate();

  const handlePaymentSuccess = (details: any) => {
    // Set paymentCompleted to true when payment is successful
    setPaymentCompleted(true);

    const paymentDetails = {
      amount: selectedAmount,
      selectedCourse: selectedCourseId,
      designer:designerId
    };

    userAxios.post(`/paymentforCourse`, paymentDetails)
      .then((res) => {
        console.log("payment request success",res);
           
setPaymentedData(res?.data)
setIsModalOpen(true)
        // You can handle additional logic here if needed
      })
      .catch((err) => {
        console.log("payment request failed", err);
        // Handle the error, display an error message, etc.
      });

      
    // navigate(`/payment-success/${}`);
  };
console.log(paymentedData,"paymented daaaaaata");

  return (
    <>
    <div className={isModalOpen ? 'blur' : ''}>
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
</div>
{paymentCompleted && <SuccessPage courseData={paymentedData}/>} 

</>

  );
}

export default Payment;