import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import {  adminType } from '../../../Models/Models'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal'
import { updateProfile } from '../../../Services/admin/adminData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

type initialValueType = {
    name: string
    email: string
    phone: number|null
    image : string|undefined
  }

  type EditProfileProps = {
    isOpen: boolean;
    closeModal: () => void;
    setAdmin:React.Dispatch<React.SetStateAction<adminType | undefined>>;
    adminData:adminType|undefined
  };


const EditProfile: React.FC<EditProfileProps> = ({ isOpen, closeModal,setAdmin,adminData }) => {
    
  const [fileUrl,setUrl]=useState<any>("")
  const [showButton,setShowButton]=useState(false)
  const [imageError, setImageError] = useState<string | null>(null);



  
  const handleFileChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
    const file:any =e.target.files?.[0]

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file?.type)) {
      // setIsError(true);
      setImageError("Only JPEG, PNG, and GIF images are allowed.");
      return;
    }

    if(file){
       generateUrl(file)
    }else{
     console.log("nulll");
     
    }
 })
    


    const generateUrl=async(img:File)=>{

        try{
          console.log()
          const datas=new FormData()
          datas.append('file',img)
          datas.append('upload_preset','stitchy')
          datas.append('cloud_name','doottwqrx')
          console.log("hereeee????");
          
          
          const {data}=await axios.post(
            "https://api.cloudinary.com/v1_1/doottwqrx/image/upload",datas
          )
    
          setUrl(data.url)
          
          console.log("urls:",data);
          if(data.url){
            setShowButton(true)
         }
          console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
          return data.url
        
        }
      catch(error){
        console.log(error);
        
      }
       
       
     }
    console.log("urlllll",fileUrl);

   const initialValues: initialValueType = {
    name: adminData?.name || '',
    email: adminData?.email || '',
    phone: adminData?.phone || null,
    image : adminData?.image
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
  
      const firstDigit = digits[0];
      if (digits.split('').every((digit) => digit === firstDigit)) {
        return false; 
      }
      return true;
    }),
  });

  


  
  const onSubmit = async (values:initialValueType)=>{
        
    console.log(values,"name updated");
    const valuesWithImg = {
      ...values,
      image:fileUrl?fileUrl:adminData?.image
  }
    
    const updatedUser = await updateProfile(valuesWithImg)
    console.log(updatedUser,"updated user");


    closeModal();
        setAdmin(updatedUser)}


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
       {/* <div className=" flex items-center justify-center px-5 py-5">
         */}

    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl " >
        <div className="md:flex">
           
           
            <div className="w-full py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-teal-700">Edit Profile</h1>
                    <p>Update your profile information</p>
                </div>
                <div>
                <Form method="POST" className="register-form" id="register-form">
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                           
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <Field type="text" name="name"
                            id="name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Name"/> <ErrorMessage  name='name'>
                            {
                             (errorMsg)=><div className='error text-red'>{errorMsg}</div>
                            }              
                 </ErrorMessage>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <Field type="text"  name="email"
                            id="email"
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email"/>
                                 <ErrorMessage name='email'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <Field type="text" name="phone"
                            id="phone" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone"/>
                            <ErrorMessage name='phone'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
              {initialValues.image || fileUrl?(
          <div className='w-full h-60 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl?fileUrl:initialValues.image})` }}>
           <div className='w-9 h-9 lg:w-9 lg:h-9 mr-2 rounded-full bg-white '>
    <form>
      <div className='text-center relative'>
        <label className="cursor-pointer">
          <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
          {/* Use absolute positioning to center the camera icon inside the rounded div */}
          <div className="absolute pt-4 pl-4 inset-0 flex items-center justify-center">
            <FontAwesomeIcon className='text-black' icon={faCamera} />
          </div>
        </label>
      </div>
    </form>
  </div>
         
          </div>
      ):(
        <div className='w-full h-60 p-5 bg-white flex justify-center'>
        <div>
       <form>
       <div className='text-center'>
       <label>
       <input  type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
       <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
                                    <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image"/>
                                    </div>
                                    <p className="ml-20 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
         
       </label>
        </div>
        </form>
          </div>
       
        </div>
      )
    }
       
      </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button type='submit' className="block w-full max-w-xs mx-auto bg-[#0F5762] hover:bg-teal-700 focus:bg-teal-700 text-white rounded-lg px-3 py-3 font-semibold">Save Changes</button>
                        </div>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    
    
{/* </div> */}

</Formik>
</Modal>
  )
}

export default EditProfile