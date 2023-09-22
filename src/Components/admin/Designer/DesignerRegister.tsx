import React,{useState} from 'react'
import * as Yup from 'yup';
import adminAxious from '../../../Axios/adminAxios';
import { ToastContainer,toast } from 'react-toastify'
import './register.css'
import "react-toastify/dist/ReactToastify.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';



type initialValueType = {
    name: string
    email: string
    phone: number|undefined
    // password: string
  }

const DesignerRegister:React.FC = ()=> {
     
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
 
  const initialValues: initialValueType = {
    name: '',
    email: '',
    phone: undefined,
    // password: '',
  }

  
  const validationSchema = Yup.object({
    name: Yup.string()
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid name format')
    .min(3, 'Name must be at least 3 characters')
    .required('Please enter designer name'),
    email: Yup.string().email('Invalid email format').required('Please enter designer email'),
    phone:  Yup.string()
    .test('is-ten-digits', 'Phone number must have 10 digits', (value) => {

      const digits = value?.replace(/\D/g, '');
  
      if (digits?.length !== 10) {
        return false;
      }
    
  
      return true;
    })
    .required('Please enter designer phone number')
    .test('is-valid', 'Invalid phone number', (value) => {
      const digits = value.replace(/\D/g, '');
  
      if (digits.length !== 10) {
        return true; 
      }
  
      const firstDigit = digits[0];
      if (digits.split('').every((digit) => digit === firstDigit)) {
        return false; 
      }
  
      return true;
    }),
    // password: Yup.string()
    //   .min(6, 'Password must be at least 6 digits')
    //   .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
    //   .required('Please enter designer password')
  });

  
  const onSubmit = (values: initialValueType) => {

    console.log(values,"values for adding designer")
  
    adminAxious.post('/addDesigner',values ).then((res) => {
        console.log("designer adding response in server side", res.data.message);
        
        setResSuccess(res.data.message)
        setResError(undefined)
        setShowModal(true)
        toast.success('🦄 add designer successfull ', {
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
      toast.error('🦄 Designer Already exist!', {
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
    <div className='flex'>

    
   <div className='ml-96'>
  
    
   <Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
<div className='h-screen w-full  flex items-center justify-center' >
<section className="signUp "  >
    <div className="container_login ">
        <div className="signUp-content  ">
            <div className="signUp-form ">
                <h2 className="form-title text-lavender">Add Designer</h2>
                <Form method="POST" className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <Field
                            type="text"
                            name="name"
                            id="name"

                            placeholder="Name"
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

                            placeholder="Email"
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
                            type="tel"
                            name="phone"
                            id="phone"

                            placeholder="Phone No:"
                        />
                        <ErrorMessage name='phone'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="re-pass">
                            <i className="zmdi zmdi-lock-outline"></i>
                        </label>
                        <Field
                            type="password"
                            name="password"
                            id="password"

                            placeholder="Password"
                        />
                        <ErrorMessage name='password'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                    </div> */}
                    
                    <div className="form-group form-button">
                    <button
                     type="submit"
                    className="w-full text-white bg-[#22A78C] hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:ring-teal-600"
                      >
                    Save
                   </button>


                   

                    </div>
                </Form>

            </div>
            <div className="signUp-image">
                <figure>
                    <img className='h-[200px] w-[600px]' src='https://www.approvedcourse.com/wp-content/uploads/2021/07/Online-Tutor.png' alt="Designer image" />
                </figure>
                 <ToastContainer/>
            </div>
        </div>
    </div>
    
</section>

</div>


</Formik>
</div>
</div>
  )
}

export default DesignerRegister
