import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal'
import userAxios from '../../../Axios/userAxios';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';



type initialValueType = {
    password:string
}
function ChangePassword() {
    
  const navigate = useNavigate();

  const id= useParams()
  console.log(id.id,'user iiiiiiiiiiiiiiiiiiiiiiiiiiiiid');
  const userId = id.id as string
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);

   
    const initialValues:initialValueType = {
        password:''
     }
 
     const validationSchema = Yup.object({
         password: Yup.string()
       .min(6, 'Password must be at least 6 digits')
       .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
       .required('Please enter your password')
     })
 
   
 
   
   const onSubmit = (values:initialValueType)=>{
     console.log(values,"otp in frondent");
     
     const passwordVeri = {
        ...values,userId
     }
     userAxios.post('/changePassword',passwordVeri).then((res)=>{
        console.log(res);
          setResSuccess(res.data.message)
          setResError(undefined)
          
          
          toast.success(respSuccess, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });

              navigate('/login');
        }).catch((err:any)=>{
          console.log(err?.response?.data?.message);
          
          setResError(err?.response?.data?.message)
          setResSuccess(undefined)
          toast.error(err?.response?.data?.message || 'An error occurred', {
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
            <div className="w-[700px] h-[350px] max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300  mt-40">
            <h1 className="text-3xl pl-16 pt-5 font-medium">Reset your password</h1>
            <p className="text-slate-500 text-sm pl-20 px-5">create a new password.we'll ask for this</p><p className="text-slate-500 text-sm pl-28 px-5">password whenever you log in.</p>
            <Form method="POST" className="register-form my-10" id="register-form">
                <div className="flex flex-col space-y-5">
                 
                        {/* <p className="font-medium text-slate-700 ">Email address</p> */}
                        <Field
                                type="password"
                                name="password"
                                id="password"  className="w-full   border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  " placeholder="Enter Your Password"/>
                                
                                <ErrorMessage name='password'>
                                 {
                                  (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                 }    
                              </ErrorMessage>
                   
                    <button type='submit'  className="w-full  text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:shadow inline-flex space-x-2 items-center justify-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                          </svg> */}
                          
                          submit
                    </button>
                    
                </div>
            </Form>
        </div>
        </Formik>
  )
}

export default ChangePassword
