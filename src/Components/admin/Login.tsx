import React,{FormEvent,useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../Services/admin/adminLogin';
import { useAppDispatch } from '../../Redux/hooks';
import { updateAdminCredentials } from '../../Redux/admin/adminSlice';
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
     
    

const loginForm = async (values:initialValueType)=>{
 
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
  }
  
  
}

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={loginForm}>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <Form className="space-y-6" method='POST'>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        <ErrorMessage name='email'>
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <Field type="password" name="password" id="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
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
     
      {resError && <p className="fonts text-red-500 text-lg">{resError}</p>}
    </Form>
  </div>
  </Formik>
  )
}

export default AdminLogin;
