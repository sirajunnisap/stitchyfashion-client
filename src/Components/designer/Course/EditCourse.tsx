import React,{useState} from 'react'
import * as Yup from 'yup';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

// import { editCourse } from '../../Services/designer/Coureses';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from 'react-modal'
import { courseType } from '../../../Models/Models';
import { editCourse } from '../../../Services/Course/Coureses';
import { useNavigate } from 'react-router-dom';

type initialValueType = {
    title: string;
    description: string;
    duration: number|null; // Change this to string
    level: string;
    courseFee: number | null;
    image: string;
  };


  
type EditCourseProps = {
    isOpen: boolean;
    closeModal: () => void;
    setCourse: React.Dispatch<React.SetStateAction< courseType| undefined>>;
    CourseData:courseType|undefined
  
};

const EditCourse: React.FC<EditCourseProps> =({isOpen,closeModal,setCourse,CourseData})=> {

    
  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const navigate = useNavigate()

const initialValues:initialValueType = {
    title:CourseData?.title||'',
    description:CourseData?.description||'',
    duration:CourseData?.duration||null,
    level:CourseData?.level||'',
    courseFee:CourseData?.courseFee||null,
    image:CourseData?.image||'',
  
  }
  
    // Create validation schema using Yup
    const validationSchema = Yup.object({
      title: Yup.string().min(3, 'Title must be at least 3 characters').required('Please enter title'),
      description: Yup.string().min(10, 'Description must be at least 10 characters').required('Please enter description'),
      duration: Yup.string().required('Please enter duration'),
      level: Yup.string().required('Please enter level (Beginner, Intermediate, Advance)'),
      courseFee: Yup.number().required('Please enter course fee'),
      image: Yup.string(),
    });

    
    const onSubmit = async (values: initialValueType) => {
        console.log(values, "bodyforaddcourse");
        
        const courseId = CourseData?._id as string;
        console.log(courseId, "courseId");
        
        try {
          const updatedCourse = await editCourse(values, courseId); // Pass values and courseId separately
          console.log('Course updated successfully', updatedCourse);
          console.log(updatedCourse.data, "successmessage");
      
          closeModal();
          setCourse(updatedCourse);
      
          
        } catch (error: any) {
          console.error('Error adding course:', error?.response?.data?.message);
          setResSuccess(undefined);
          setResError(error?.response?.data?.message);
        }
      };

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
                    <h1 className="font-bold text-3xl text-teal-700">Edit Course</h1>
                    <p>Update course information</p>
                </div>
                <div>
                <Form method="POST" className="register-form" id="register-form">
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                           
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <Field type="text" name="title"
                            id="title" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" /> <ErrorMessage  name='title'>
                            {
                             (errorMsg)=><div className='error text-red'>{errorMsg}</div>
                            }              
                 </ErrorMessage>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <Field type="text"  name="description"
                            id="description"
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                 <ErrorMessage name='description'>
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
                                <Field type="text" name="duration"
                            id="duration" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                            <ErrorMessage name='duration'>
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
                                <Field type="text" name="level"
                            id="level" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                            <ErrorMessage name='level'>
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
                                <Field type="text" name="courseFee"
                            id="courseFee" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                            <ErrorMessage name='courseFee'>
                           {
                            (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                           }    
                        </ErrorMessage>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button type='submit' className="block w-full max-w-xs mx-auto bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white rounded-lg px-3 py-3 font-semibold">Save Changes</button>
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

export default EditCourse
