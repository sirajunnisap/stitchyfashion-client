import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { designerType } from '../../../Models/Models'
import * as Yup from 'yup';
import { updateProfile } from '../../../Services/designer/designerData';
import { removeField } from '../../admin/Designer/cvFunctions';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'


type initialValueType = {
    name: string;
    email: string;
    phone: number | null;
    field: string;
    aboutMe: string;
    image: string | undefined;
};


type EditProfileProps = {
    isOpen: boolean;
    closeModal: () => void;
    setDesigner: React.Dispatch<React.SetStateAction<designerType | undefined>>;
    designerData: designerType | undefined
};

const EditProfile: React.FC<EditProfileProps> = ({ isOpen, closeModal, setDesigner, designerData }) => {


    
    const [fileUrl,setUrl]=useState<any>("")
    console.log({designerData})
    const [showButton,setShowButton]=useState(false)


    const handleFileChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files?.[0]
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
        name: designerData?.name || '',
        email: designerData?.email || '',
        phone: designerData?.phone || null,
        aboutMe: designerData?.aboutMe || '',
        field: designerData?.field || '',
        image: designerData?.image
    };



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
      
          if (/^0+$/.test(digits)) {
            return false;
          }
      
          return true;
        }),
        field: Yup.string().required('please enter your specialaization'),
    });

    const onSubmit = async (values: initialValueType) => {

        console.log(values, "name updated");


        const valuesWithImg = {
            ...values,
            image:fileUrl?fileUrl:designerData?.image
        }
        console.log(valuesWithImg,"values with image r");
        
        const updatedUser = await updateProfile(valuesWithImg)
        console.log(updatedUser, "updated user");


        closeModal();
        setDesigner(updatedUser)
    }

    

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


                        <div className="w-full px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-2xl mt-3 text-teal-700">Edit Profile</h1>
                                <p className='text-sm'>Update your profile information</p>
                            </div>
                            <div>
                                <Form method="POST" className="register-form" id="register-form">
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">

                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <Field type="text" name="name"
                                                    id="name" className="w-full text-sm -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Name" /> <ErrorMessage name='name'>
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
                                                    className="w-full text-sm -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email" />
                                                <ErrorMessage name='email'>
                                                    {
                                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
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
                                                    id="phone" className="w-full text-sm -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone" />
                                                <ErrorMessage name='phone'>
                                                    {
                                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                    }
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">

                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <Field type="text" name="field"
                                                    id="field" className="w-full text-sm -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="specialization" />
                                                <ErrorMessage name='field'>
                                                    {
                                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                    }
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                                </div>
                                                
                                                
                                                
                                                    <Field
                                                        as="textarea" 
                                                        name="aboutMe" 
                                                        className="w-full text-sm -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="About Me"
                                                    />
                                             
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
        <div className='w-full h-32 bg-white flex justify-center'>
        <div>
       <form>
       <div className='text-center'>
       <label>
       <input  type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
       <div className="flex flex-auto p-10 mx-auto mt-14">
                                    <img className="has-mask p-28 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image"/>
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
                                    <div className="flex ">
                                        <div className="w-full  mb-4">
                                            <button type='submit' className="block w-full max-w-xs mx-auto bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white rounded-lg py-1.5 font-semibold">Save Changes</button>
                                        </div>
                                    </div>
                                </Form>
                               
                            </div>
                        </div>
                    </div>
                </div >


                {/* </div> */}

            </Formik >
        </Modal >
    )
}

export default EditProfile



