import React,{useEffect, useState} from 'react'
import * as Yup from 'yup';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

// import { editCourse } from '../../Services/designer/Coureses';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from 'react-modal'
import { courseType } from '../../../Models/Models';
import { editCourse } from '../../../Services/Course/Coureses';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons';
import { courseDetails } from '../../../Services/Course/courseData';

type initialValueType = {
    title: string;
    description: string;
    duration: number|null; 
    level: string;
    courseFee: number | null;
    image: string|undefined;
  };




const EditCourse: React.FC =()=> {

    const [fileUrl, setUrl] = useState<any>("")
    const [showButton, setShowButton] = useState(false)
    const [reserror, setError] = useState<string | null>(null)

    const { id } = useParams()
    const [courseData, setCourseData] = useState<courseType | undefined>(undefined)

    const navigate = useNavigate()

    useEffect(() => {
        const getCourse = async () => {
          try {
    
            const Course = await courseDetails(id);
            if (Course) {
              const designerDetails = Course.designer
    
              console.log(designerDetails, "designer in coursedtails");
    
            }
            console.log(Course, "coursedetails");
    
    
            setCourseData(Course)
    
          } catch (error: any) {
            console.log(error);
    
          }
        }
        getCourse()
    
      }, [id])

const initialValues:initialValueType = {
    title:courseData?.title||'',
    description:courseData?.description||'',
    duration:courseData?.duration||null,
    level:courseData?.level||'',
    courseFee:courseData?.courseFee||null,
    image:courseData?.image
  
  }
  
  console.log(initialValues.title,"initial valuse");
  
    // Create validation schema using Yup
    const validationSchema = Yup.object({
      title: Yup.string().min(3, 'Title must be at least 3 characters').matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid format').required('Please enter title'),
      description: Yup.string().min(10, 'Description must be at least 10 characters').matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid format').required('Please enter description'),
      duration: Yup.string().min(3, 'duration must be at least 3 characters').required('Please enter duration'),
      level: Yup.string().test(
        'isValidLevel',
        'Please choose "beginner," "intermediate," or "advance."',
        (value:any) => {
          return ['beginner', 'intermediate', 'advance'].includes(value.toLowerCase());
        }
      ).required('Please enter level (Beginner, Intermediate, Advance)'),
     courseFee: Yup.number().min(3, 'courseFee must be at least 3 characters').required('Please enter course fee'),
      
    });

    const courseId = courseData?._id as string;

    const onSubmit = async (values: initialValueType) => {
        console.log(values, "bodyforaddcourse");
        
      
        console.log(courseId, "courseId");
        
        const valuesWithImg = {
            ...values,
            _id: courseData?._id ?? '',
            image: fileUrl?fileUrl:courseData?.image
          }
      
          console.log(valuesWithImg, "values for category update")
        
          console.log(EditCourse, "edited course");

          try {
            // console.log(newClass, "body for add course");
            const EditCourse = await editCourse(valuesWithImg, courseId)
            setCourseData(EditCourse)
            console.log('Course added successfully', EditCourse);
      
            // setResSuccess(response.data)
            navigate(`/designer/courseDetails/${id}`);
      
           
            toast.success('🦄 course edit successfully', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
      
          } catch (error: any) {
            console.error('Error adding course:', error?.response?.data?.message);
          
            toast.error( error?.response?.data?.message, {
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
      
      };

      const handleFileChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        const file: any = e.target.files?.[0]
    
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(file?.type)) {
           setError("Only JPEG, PNG, and GIF images are allowed.");
          return;
        }
        if (file) {
          generateUrl(file)
        } else {
          console.log("nulll");
    
        }
      })
    
    
    
      const generateUrl = async (img: File) => {
    
        try {
          console.log()
          const datas = new FormData()
          datas.append('file', img)
          datas.append('upload_preset', 'stitchy')
          datas.append('cloud_name', 'doottwqrx')
          console.log("hereeee????");
          console.log(datas, "formdataqqqqqqqqqqqqqqqqqqqwertyu");
    
    
          const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/doottwqrx/image/upload", datas
          )
    
          setUrl(data.url)
    
          console.log("urls:", data);
          if (data.url) {
            setShowButton(true)
          }
          console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
          return data.url
    
        }
        catch (error) {
          console.log(error);
    
        }
    
    
      }
      console.log("urlllll", fileUrl);
    
  return (
         

<Formik
enableReinitialize={true} 
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
       {/* <div className=" flex items-center justify-center px-5 py-5">
         */}

    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl ml-60 mt-1 mr-10 " >
        <div className="md:flex">
           
           
            <div className="w-full py-7 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-teal-700">Edit Course</h1>
                    <p>Update course information</p>
                </div>
                <div>
                <Form method="POST" className="register-form" id="register-form">
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                           
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
                        
                    </div>
                    <div className="flex -mx-3">
                      
                        <div className="w-full px-3 mb-5">
                            
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
                  

                    <div className='form-group'>
                            {initialValues.image || fileUrl ? (
                              <div className='w-full h-72 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl ? fileUrl : initialValues.image})` }}>
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
                            ) : (
                              <div className='w-full h-72 p-5 bg-cover flex justify-end'>
                              <div className='w-9 h-9 lg:w-9 lg:h-9 mr-2 rounded-full bg-white '>
                                <form>
                                    <div className='text-center'>
                                      <label>
                                        <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
                                        <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
                                          <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image" />
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

                          {reserror && (
                            <p className="text-red-500 text-sm mt-1">{reserror}</p>
                          )}

                       
                    
                    <div className="flex ">
                        <div className="w-full">
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
  )
}

export default EditCourse
