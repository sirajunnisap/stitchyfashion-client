import React, { FormEvent, useState } from 'react'
import userAxios from '../../../Axios/userAxios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {motion} from 'framer-motion'
import * as Yup from 'yup';
import TextError from '../TextError';
import './register.css'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import "yup-phone";


import { Modal, Button } from 'react-bootstrap';
import {FaCheckCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';


type initialValueType = {
  name: string
  email: string
  phone: number|undefined
  password: string
  confirmPassword:string
}


const UserRegister: React.FC = () => {

  
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
 
  const initialValues: initialValueType = {
    name: '',
    email: '',
    phone: undefined,
    password: '',
    confirmPassword:''
  }
  
  const validationSchema = Yup.object({
    name: Yup.string()
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid name format')
    .min(3, 'Name must be at least 3 characters')
    .required('Please enter your name'),
    email: Yup.string().email('Invalid email format').required('Please enter your email'),
    phone:  Yup.string()
    .test('is-ten-digits', 'Phone number must have 10 digits', (value) => {

      const digits = value?.replace(/\D/g, '');
  
      if (digits?.length !== 10) {
        return false;
      }
    
  
      return true;
    })
    .required('Please enter your phone number')
    .test('is-valid', 'Invalid phone number', (value) => {
      const digits = value.replace(/\D/g, '');
  
      if (digits.length !== 10) {
        return true; 
      }
  
    //   if (/^0+$/.test(digits)) {
    //     return false;
    //   }
    //   if (/^1+$/.test(digits)) {
    //     return false;
    //   }
      const firstDigit = digits[0];
      if (digits.split('').every((digit) => digit === firstDigit)) {
        return false; 
      }
      return true;
    }),
    password: Yup.string()
      .min(6, 'Password must be at least 6 digits')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
      .required('Please enter your password'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),],'passwords must match')
    .required('please confirm your password')
  });

  const onSubmit = (values: initialValueType) => {

    console.log(values.name, values.email)
  
    userAxios.post('/signup', { name: values.name, email: values.email, phone: values.phone, password: values.password }).then((res) => {
        console.log("signup response in server side", res.data.message);
        
        setResSuccess(res.data.message)
        setResError(undefined)
        setShowModal(true)
        toast.success('🦄 User signup successfull please verify your mail', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        
    }).catch((err:any)=>{
      console.log(err?.response?.data?.message);
      
      setResError(err?.response?.data?.message)
      setResSuccess(undefined)
      toast.error(resError, {
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
  
  const closeModal = ()=>{
    setShowModal(false);
  }

  const navigate = useNavigate()
  

  return (
   
    <Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
<div className='h-screen w-fulltop-0 flex items-center justify-center' >
<section className="signUp "  >
    <div className="container_login ">
        <div className="signUp-content  ">
            <div className="signUp-form ">
                <h2 className="form-title text-lavender">Sign up</h2>
                <Form method="POST" className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <Field
                            type="text"
                            name="name"
                            id="name"

                            placeholder="Your Name"
                        />
                        <ErrorMessage  name='name'>
                                   {
                                    (errorMsg)=><div className='error text-red'>{errorMsg}</div>
                                   }              
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <i className="zmdi zmdi-email"></i>
                        </label>
                        <Field
                            type="email"
                            name="email"
                            id="email"

                            placeholder="Your Email"
                        />
                        <ErrorMessage name='email'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">
                            <i className="fa-sharp fa-solid fa-address-book"></i>
                        </label>
                        <Field
                            type="number"
                            name="phone"
                            id="phone"

                            placeholder="Your Dial number"
                        />
                        <ErrorMessage name='phone'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-pass">
                            <i className="zmdi zmdi-lock-outline"></i>
                        </label>
                        <Field
                            type="password"
                            name="password"
                            id="password"

                            placeholder="Enter your Password"
                        />
                        <ErrorMessage name='password'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-pass">
                            <i className="zmdi zmdi-lock-outline"></i>
                        </label>
                        <Field
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"

                            placeholder="Confirm your Password"
                        />
                        <ErrorMessage name='confirmPassword'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                    </div>
                    
                    <div className="form-group form-button">
                    <button
                     type="submit"
                    className="w-full text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                    Sign Up
                   </button>


                   <div className="ml-10 mt-10 text-sm font-medium text-gray-500 dark:text-gray-300">
       I'm already member <Link to={'/login'} className="text-blue-700 hover:underline dark:text-blue-500">Sign in</Link>
         </div>

                    </div>
                </Form>

            </div>
            <div className="signUp-image">
                <figure>
                    <img src='https://i.pinimg.com/564x/0d/30/9b/0d309bbc802545f9ef289357a3179b89.jpg' alt="sing up image" />
                </figure>
                 <ToastContainer/>
            </div>
        </div>
    </div>
    
</section>

</div>


</Formik>

    
  )
}

export default UserRegister;

