
import React, {FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { designerLogin } from '../../../Services/designer/designerLogin';
import { useAppDispatch } from '../../../Redux/hooks';
import { updateUserCredentials } from '../../../Redux/client/userSlice';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Link } from 'react-router-dom';
import { updateDesignerCredentials } from '../../../Redux/designer/designerSlice';

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

  const onSubmit =async (values:initialValueType)=>{

    try {
      const Designer = await designerLogin(values.email,values.password)
      
      if(Designer){
        
        const {token,designerData} = Designer
      console.log(token,designerData);

      // localStorage.setItem("designerToken",token)
      // localStorage.setItem("designerData",JSON.stringify({accessToken:token,designer:designerData}))
  
       dispatch(updateDesignerCredentials({accessToken:token,designerData:designerData?.name}))
    
         setResError(undefined)
 
       
        navigate('/designer/dashboard');
      }
    } catch (err:any) {
      setResError(err?.response?.data?.message)
      setResSuccess(undefined)
      toast.error('🦄 User is not exist!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

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
                    <h2 className="form-title text-lavender">LOGIN</h2>
                    <Form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                        <label htmlFor="pass" className="pl-1">
                                <i className="fa-sharp fa-solid fa-envelope"></i>
                            </label>
                           
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="pl-5"
                                placeholder="Your Email"
                            />
                            <ErrorMessage name='email'>
                               {
                                (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                               }    
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass" className="pl-1">
                                <i className="fa-sharp fa-solid fa-lock"></i>
                            </label>
                            <Field
                          
                                type="password"
                                name="password"
                                id="password"
                                className="pl-5"
                                placeholder="Enter your Password"
                            />
                            <ErrorMessage name='password'>
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
                       LOGIN
                       </button>
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
    {/* {resError && <p className="fonts text-green text-lg">{resError}</p>} */}
    </div>
    
    
    </Formik>
  );
};

export default DesignerLogin;



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
