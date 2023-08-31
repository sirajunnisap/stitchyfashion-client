import React,{FormEvent,useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../Services/admin/adminLogin';
import { useAppDispatch } from '../../Redux/hooks';
import { updateAdminCredentials } from '../../Redux/admin/adminSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
type initialValueType = {
    email : string,
    password : string
}

const initialValues: initialValueType = {
    email : '',
    password: ''
}

const validationSchema = Yup.object({
    email : Yup.string().email('invalid email format').required('please enter your email'),
    password : Yup.string().min(6,'password must be at lease 6 digits ').matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
    .required('Please enter your password')
})



const AdminLogin:React.FC = ()=> {


  const [resError, setResError] = useState<string | undefined>(undefined);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
     
    

const onSubmit = async (values:initialValueType)=>{
 
  try {
    const Admin = await adminLogin(values.email,values.password)
    if(Admin){
      const {accessToken,admin} = Admin
      console.log('accesstoken',accessToken);
      
      dispatch(updateAdminCredentials({accessToken:accessToken,adminName:admin?.name}))
      navigate('/admin/dashboard');
    }
  } catch (error:any) {
    console.log(error?.response?.data?.message);
    
    setResError(error?.response?.data?.message)
    toast.error('🦄 User is not exist', {
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
                              <label htmlFor="name">
                                  <i className="zmdi zmdi-account material-icons-name"></i>
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
    
      </div>
      
      
      </Formik>
  )
}

export default AdminLogin;
