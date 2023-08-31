
import React, {FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { designerLogin } from '../../Services/designer/designerLogin';
import { useAppDispatch } from '../../Redux/hooks';
import { updateUserCredentials } from '../../Redux/client/userSlice';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';

type initialValueType = {
  email: string
  password: string
}

const DesignerLogin: React.FC = () => {


   
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);


  const initialValues: initialValueType = {
    email: '',
    password: '',
  }

   const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Please enter your email'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 digits')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
      .required('Please enter your password')
  });

  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const loginForm = async (e:FormEvent<HTMLFormElement>) =>{
  //   e.preventDefault();


    
  //   try {
     
  //     const User = await userLogin(email,password)
  //     if(User){
  //       const {accessToken,user} = User
  //       console.log('accesstoken',accessToken);
        
  //       dispatch(updateUserCredentials({accessToken:accessToken,userName:user?.name}))
  //       navigate('/');
  //     }
  //   } catch (error:any) {
  //     error?.response?.data?.message && setApiError(error?.response?.data?.message)
  //     console.log(error?.response);
      
  //   }
  // } 

  const onSubmit =async (values:initialValueType)=>{

    try {
      const Designer = await designerLogin(values.email,values.password)
      
      if(Designer){
        
        const {token,designerData} = Designer
      console.log(token,designerData);

  
        dispatch(updateUserCredentials({accessToken:token,designer:designerData?.name}))
    
         setResError(undefined)
 
       
        navigate('/');
      }
    } catch (err:any) {
      setResError(err?.response?.data?.message)
      setResSuccess(undefined)
    }
  }

  return (
     <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <Form className="space-y-6" method='POST'>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
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
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <Field type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            <ErrorMessage name='password'>
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>
          </div>
        
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <Link to={'/signup'} className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        </div>
        {respSuccess && <p className="fonts text-green-400">{respSuccess}</p>}
        {resError && <p className="fonts text-red-500 text-lg">{resError}</p>}
      </Form>
    </div>
    </Formik>
  );
};

export default DesignerLogin;
