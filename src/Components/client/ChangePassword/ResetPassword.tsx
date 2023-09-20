import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal'
import userAxios from '../../../Axios/userAxios';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';

    type initialValueType = {
        email:string
    }

  type Props = {
    isOpen: boolean;
    closeModal: () => void;
  };


const ResetPassword: React.FC<Props> = ({ isOpen, closeModal })=> {

  const navigate = useNavigate();

  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);

    const initialValues:initialValueType = {
        email:''
    }

    const validationSchema = Yup.object({
        email:Yup.string().email('invalid email format').required('please enter your email')
    })

    const onSubmit = (values:initialValueType)=>{
        userAxios.post('/forgetPassword',values).then((res)=>{
          console.log(res);
          setResSuccess(res.data.message)
          setResError(undefined)
          
          toast.success('🦄 an otp has been sent to your account please verify', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });

              navigate('/otpVerification');
              
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
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Profile Modal"
      className="modal" 
      overlayClassName="modal-overlay" 
    >
         <Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
        <div className="w-[700px] h-[360px] max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-3xl font-medium ml-14">Forgot your password?</h1>
        <p className="text-slate-500 ml-24">Please enter your email address</p>

        <Form method="POST" className="register-form my-10" id="register-form">
            <div className="flex flex-col space-y-5">
             
                    {/* <p className="font-medium text-slate-700 ">Email address</p> */}
                    <Field
                            type="email"
                            name="email"
                            id="email"  className="w-full   border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow  " placeholder="Enter email address"/>
                            
                            <ErrorMessage name='email'>
                                 {
                                  (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                 }    
                              </ErrorMessage>
               
                <button type='submit'  className="w-full  text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:shadow inline-flex space-x-2 items-center justify-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg> */}
                      
                      <span>Send OTP</span>
                </button>
                <p className="text-center ">Not registered yet? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><Link to={'/signup'}>Register now </Link><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></p>
            </div>
        </Form>
    </div>
    </Formik>
    
</Modal>
  )
}

export default ResetPassword
