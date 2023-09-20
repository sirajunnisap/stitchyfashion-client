import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal'
import userAxios from '../../../Axios/userAxios';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';


type initialValueType = {
    otp:number|undefined
}


function ForgotPassword() {

    const navigate = useNavigate();

    const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
    const [resError, setResError] = useState<string | undefined>(undefined);
    const initialValues:initialValueType = {
        otp:undefined
    }

    const validationSchema = Yup.object({
        otp:Yup.string().min(4, 'otp must be 4 digits').required('please enter your OTP')
    })

  

  
  const onSubmit = (values:initialValueType)=>{
    console.log(values,"otp in frondent");
    
    userAxios.post('/otpVerification',values).then((res)=>{

        console.log(res,"reponse from backend for userid");
       const userid  = res.data.userId
       console.log(userid,"userid");
       
            navigate(`/changePassword/${userid}`);
      }).catch((err:any)=>{
        console.log(err?.response?.data?.message);
        
        setResError(err?.response?.data?.message)
        setResSuccess(undefined)
        toast.error(resError|| 'An error occurred', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
}
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
            <div className="w-[700px] h-[350px] max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 mt-40">
            <h1 className="text-3xl ml-24 font-medium">OTP Verification</h1>
            <p className="text-slate-500 px-12">Enter the verification code we just sent you on <span className='ml-20'> your email address.</span></p>
    
            <Form method="POST" className="register-form my-10" id="register-form">
                <div className="flex flex-col space-y-5">
                 
                        {/* <p className="font-medium text-slate-700 ">Email address</p> */}
                        <Field
                                type="number"
                                name="otp"
                                id="otp"  className="w-full   border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  " placeholder="Enter Your OTP"/>
                                {/* <ErrorMessage name='otp'>
                                 {
                                  (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                 }    
                              </ErrorMessage> */}
                              {resError && (
    <p className="text-red-500 text-sm mt-1">{resError}</p>
  )}
                   
                    <button type='submit'  className="w-full  text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:shadow inline-flex space-x-2 items-center justify-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                          </svg> */}
                          
                          <span>Verify</span>
                    </button>
                    
                </div>
            </Form>
        </div>
        </Formik>
  );
}

export default ForgotPassword;






// <section className="w-full min-h-screen flex items-center justify-center bg-red-100">
//       <div className="bg-gray-950 flex rounded-2xl shadow-lg max-w-3xl p-8 items-center">
//         <div className="w-full md:w-1/2 px-16">
//           <h3 className="mb-4 my-7 text-xl font-medium text-white dark:text-white">
//             Forgot Your Password?
//           </h3>
//           <p className="mb-2 text-xs font-normal text-white">
//             OTP sent to{' '}
//             <span className="text-green-400 text-sm">{email}</span>
//           </p>
//           {isLoading && <div>Loading...</div>}
//           {otpErrorMessage && (
//             <p className="text-xs px-2 text-red-600 dark:text-red-400">
//               {otpErrorMessage}
//             </p>
//           )}
//           <form
//             onSubmit={verifyOtp}
//             className="space-y-14 my-10"
//           >
//             <div>
//               <input
//                 type="text"
//                 name="otp"
//                 ref={otpInputRef}
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 minLength="4"
//                 maxLength="4"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                 placeholder=" Enter The Otp"
//                 required
//               />
//             </div>
//             <button
//             type='submit'
//               className="w-30 mx-4 text-white bg-orange-500 hover:scale-105 duration-300 focus:outline-none font-medium rounded-lg text-xs px-5 py-2.5 text-center"
//               disabled={!otp || isLoading}
//             >
//               Verify
//             </button>
//             <div className="text-sm font-normal text-white dark:text-gray-300">
//               {!startTimer && (
//                 <a
//                   onClick={restartTimer}
//                   className="mx-2 text-orange-500 cursor-pointer duration-300"
//                 >
//                   Resend OTP
//                 </a>
//               )}
//               {startTimer && (
//                 <a className="mx-2 text-orange-500 cursor-pointer duration-300">
//                   <span className="mx-2 text-white cursor-pointer duration-300  my-0">
//                     Resend OTP In {remainingTime} seconds
//                   </span>
//                 </a>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="w-1/2 md:block hidden">
//           <img
//             className="rounded-2xl "
//             src="../../../../assets/image/Enter OTP-pana.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </section>


// const verifyOtp = () => {
    // e.preventDefault();
    // setIsLoading(true);
    // Add your OTP verification logic here.
    // You can access the OTP value using the 'otp' state variable (otp).

    // For demonstration purposes, simulate a successful verification after 2 seconds.
    // setTimeout(() => {
    //   setIsLoading(false);
      // Replace the following condition with your actual verification logic
    //   if (otp === '1234') {
        // OTP verification successful
        // Add your logic to handle successful verification
    //   } else {
        // OTP verification failed
        // setOtpErrorMessage('Invalid OTP. Please try again.');
        // otpInputRef.current.focus();
    //   }
    // }, 2000);
//   };

//   const restartTimer = () => {
    // Add logic to resend OTP here.
    // For demonstration purposes, let's start a timer for 60 seconds.
    // setStartTimer(true);
    // setRemainingTime(60);

    // const timerInterval = setInterval(() => {
    //   setRemainingTime((prevTime) => {
    //     if (prevTime > 1) {
    //       return prevTime - 1;
    //     } else {
    //       setStartTimer(false);
    //       clearInterval(timerInterval);
    //       return '';
    //     }
    //   });
    // }, 1000);
//   };


// const [otp, setOtp] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpErrorMessage, setOtpErrorMessage] = useState('');
//   const [startTimer, setStartTimer] = useState(false);
//   const [remainingTime, setRemainingTime] = useState('');
//   const email = 'user@example.com'; // Replace with actual email

//   const otpInputRef = useRef(null);