import React, { FormEvent, useState } from 'react'
import './style.css';
import userAxios from '../../Axios/userAxios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {motion} from 'framer-motion'
import * as Yup from 'yup';
import TextError from './TextError';

import { Modal, Button } from 'react-bootstrap';
import {FaCheckCircle} from 'react-icons/fa'


type initialValueType = {
  name: string
  email: string
  phone: number|undefined
  password: string
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
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters').required('Please enter your name'),
    email: Yup.string().email('Invalid email format').required('Please enter your email'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Please enter your phone number'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 digits')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
      .required('Please enter your password')
  });

  const onSubmit = (values: initialValueType) => {

    console.log(values.name, values.email)
  
    userAxios.post('/signup', { name: values.name, email: values.email, phone: values.phone, password: values.password }).then((res) => {
        console.log("signup response in server side", res.data.message);
        
        setResSuccess(res.data.message)
        setResError(undefined)
        setShowModal(true)

        
    }).catch((err:any)=>{
      console.log(err?.response?.data?.message);
      
      setResError(err?.response?.data?.message)
      setResSuccess(undefined)
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
       <div className="relative w-full min-h-screen bg-gray-100 dark:bg-gray-900">
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[30%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
           <Form className="register-form space-y-6" method='POST' id='register-form'>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>

          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <Field type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " placeholder="Enter your name" required />
            <ErrorMessage name='name'>
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            <ErrorMessage name='email'>
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
            <Field type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone Number" required />
            <ErrorMessage name='phone'>
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <Field type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            <ErrorMessage name='password'>
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            I'm already member <a onClick={() => { navigate('/login') }} className="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
          </div>



          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        
          
         
          <div>
          <Modal  className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        
        show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <FaCheckCircle className="success-icon " />
          <p className=' text-lg'>Your form submission was successful.Please check your registered email for email verification</p>
          {respSuccess && <p className="fonts text-green-400">{respSuccess}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='rounded-none ' onClick={closeModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
        {resError && <p className="fonts text-red-500 text-lg">{resError}</p>}
      </div>
              
        </Form>
        </div>
        </div>  
      </div>
     
    </Formik>
    
  )
}

export default UserRegister;

