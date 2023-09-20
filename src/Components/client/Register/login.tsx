
import React, {FormEvent, useState } from 'react';
import UserLoginWithGoogle from './LoginWithGoogle';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../Services/client/userLogin';
import { useAppDispatch } from '../../../Redux/hooks';
import { updateUserCredentials } from '../../../Redux/client/userSlice';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userAxios from '../../../Axios/userAxios';
import { Link } from 'react-router-dom';

import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import ResetPassword from '../ChangePassword/ResetPassword';

type initialValueType = {
  email: string
  password: string
}

const UserLogin: React.FC = () => {


   
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [isModalOpen,setIsModalOpen] = useState(false)

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
      const User = await userLogin(values.email,values.password)
      console.log(User,"userData in Login ");
      
      if(User){
        
        const {token,userData} = User
      console.log(token,userData);

  
        dispatch(updateUserCredentials({accessToken:token,userData:userData?.name}))
    
         setResError(undefined)
 
       
        navigate('/');
      }
    } catch (err:any) {
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
    }
  }
  function openModal (){
    setIsModalOpen(true)
  }

  function closeModal (){
    setIsModalOpen(false)
  }
  return (
    <>
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
                              <label htmlFor="name" className='pl-1'>
                                  <i className="fa-sharp fa-solid fa-envelope "></i>
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
                              <label htmlFor="pass" className='pl-1'>
                                  <i className="fa-sharp fa-solid fa-address-book"></i>
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
                          
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300  my-6 ">
         <p className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"onClick={
                    openModal
                  }>Forgot password?</p>
       </div>
            
                        
                          <div className="form-group form-button">
                          <button
                           type="submit"
                          className="w-full text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                         LOGIN
                         </button>
                          </div>

                    
                          <div className="inline-flex items-center justify-center ml-3">
    <hr className="w-[270px] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 "/>
    <span className="absolute px font-medium text-gray-900 -translate-x-1/2 bg-white  dark:text-white dark:bg-gray-900">or</span>
</div>
<div className='rounded-full border-gray-500 ml-32'>
                          
            <UserLoginWithGoogle/>
          
          
        
                          </div>

                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 ml-8 mt-6">
           Not registered? <Link to={'/signup'} className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
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
       <ResetPassword isOpen={isModalOpen}  closeModal={closeModal} />
       </> 
  );
};

export default UserLogin;


 




            //     <section className="min-h-screen flex items-center justify-center bg-red-100">
            //     <div className="bg-gray-950 flex rounded-2xl shadow-lg max-w-3xl p-8 items-center">
            //     <div className="md:w-1/2 px-16">
            //       <h3 className="mb-4 my-7 text-xl font-medium text-white dark:text-white">
            //         Forgot Your Password?
            //       </h3>
            //       {isLoading && <div>Loading...</div>}
            //       <form onSubmit={forgotPassword} className="space-y-6">
            //         <input
            //           type="email"
            //           name="email"
            //           value={email}
            //           onChange={(e) => setEmail(e.target.value)}
            //           required
            //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            //           placeholder="E-mail"
            //         />
            //         <div>
            //           <button
            //             type="submit"
            //             disabled={!email || isLoading}
            //             className="w-full text-white bg-orange-500 hover:scale-105 duration-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            //           >
            //             Reset
            //           </button>
            //         </div>
            //         {passwordErrorMessage && !email.invalid && !email.errors && (
            //           <div>
            //             <p className="text-xs px-2 text-red-600 dark:text-red-400">
            //               {passwordErrorMessage}
            //             </p>
            //           </div>
            //         )}
            //         {email.invalid && email.touched && (
            //           <div>
            //             {email.errors && email.errors.required && (
            //               <div>
            //                 <p className="text-xs px-2 text-red-600 dark:text-red-400">
            //                   Please Enter the Email
            //                 </p>
            //               </div>
            //             )}
            //             {email.errors && email.errors.email && (
            //               <div>
            //                 <p className="text-xs px-2 text-red-600 dark:text-red-400">
            //                   Enter Valid Email
            //                 </p>
            //               </div>
            //             )}
            //           </div>
            //         )}
            //       </form>
            //     </div>
            //     <div className="w-1/2 md:block hidden">
            //       <img
            //         className="rounded-2xl "
            //         src="../../../../assets/image/image.png"
            //         alt=""
            //       />
            //     </div>
            //   </div>
            // </section> 