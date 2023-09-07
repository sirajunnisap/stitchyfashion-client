import React,{useState} from 'react'
import * as Yup from 'yup';
import adminAxious from '../../../Axios/adminAxios';
import { ToastContainer,toast } from 'react-toastify'
import './register.css'
import "react-toastify/dist/ReactToastify.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Home from '../Home/Home';



type initialValueType = {
    name: string
    email: string
    phone: number|undefined
    password: string
    education: {
        university: string;
        major: string;
    }[];
    experience:string
  }

const DesignerRegister:React.FC = ()=> {
     
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
 
  const initialValues: initialValueType = {
    name: '',
    email: '',
    phone: undefined,
    password: '',
    education: [], 
    experience: '',
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
  
    adminAxious.post('/addDesigner',values ).then((res) => {
        console.log("signup response in server side", res.data.message);
        
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

    <div className='w-1/5'>
    <Home/>
    </div>
   <div className='w-4/5'>
  
    
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
>
    <div className=" flex items-center justify-center px-5 py-5">


    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl " >
        <div className="md:flex">


            <div className="w-full py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-teal-700">Add Designer</h1>
                    {/* <p>Designer information</p> */}
                </div>
                <div>
                    <Form method="POST" className="register-form" id="register-form">
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">

                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <Field type="text" name="name"
                                        id="name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Name" /> <ErrorMessage name='name'>
                                        {
                                            (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">

                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <Field type="text" name="email"
                                        id="email"
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email" />
                                    <ErrorMessage name='email'>
                                        {
                                            (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">

                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <Field type="tel" name="phone"
                                        id="phone" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone Number" /> <ErrorMessage name='phone'>
                                        {
                                            (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">

                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <Field type="password" name="password"
                                        id="password"
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Password" />
                                    <ErrorMessage name='password'>
                                        {
                                            (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                                <h2 className="section-header bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white">
                                    Education
                                </h2>
                                <div className="dynamic-field flex  items-center justify-center">
                                    <div className="form-group">
                                        <Field
                                            type="text"
                                            name="education[0].university"
                                            id="education-university"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="University:"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field
                                            type="text"
                                            name="education[0].major"
                                            id="education-major"
                                            className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Major:"
                                        />
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">

                                <div id="education-section">
                                    <h2 className="section-header  bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white ">Experience</h2>
                                    <div className="dynamic-field flex items-center justify-center">
                                        <div className="form-group  ">
                                            {/* <label htmlFor="university">University:</label> */}
                                            <Field type="text" name="experience"
                                                id="experience" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="experience:" />
                                        </div>

                                        {/* <button className="remove-field-btn" onClick={() =>removeField(this)}>Remove</button> */}
                                    </div>
                                </div>

                            
                            </div>
                        </div>
                      

                        {/* <ErrorMessage name='phone'>
                                    {
                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                    }
                                </ErrorMessage> */}
               

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <button type='submit' className="block w-full max-w-xs mx-auto bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white rounded-lg px-3 py-3 font-semibold">Save </button>
                </div>
            </div>
        </Form>
        <ToastContainer/>
    </div>
</div>
</div>
</div >


 </div> 

</Formik >
</div>
</div>
  )
}

export default DesignerRegister
