import React,{useState} from 'react'; // Removed unnecessary imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import designerAxios from '../../../Axios/designerAxios';
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import './addCourse.css';
import { Init } from 'v8';
import { addCourse } from '../../../Services/designer/Coureses';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'

// Define your initial values type
type initialValueType = {
  title: string;
  description: string;
  duration: number|null; // Change this to string
  level: string;
  courseFee: number | null;
  image: string|null;
};

const AddCourses: React.FC = () => {
  const navigate = useNavigate();

  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [fileUrl,setUrl]=useState<string|null>(null)
  const [showButton,setShowButton]=useState(false)

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const convertBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      
      fileReader.onload = () => {
        const result = fileReader.result as string; // Cast to string
        resolve(result);
        setImageUrl(result);
      };
  
  

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

const initialValues:initialValueType = {
  title:'',
  description:'',
  duration:null,
  level:'',
  courseFee:null,
  image:null,

}

  // Create validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Title must be at least 3 characters').required('Please enter title'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').required('Please enter description'),
    duration: Yup.string().required('Please enter duration'),
    level: Yup.string().required('Please enter level (Beginner, Intermediate, Advance)'),
    courseFee: Yup.number().required('Please enter course fee'),
  });

  const onSubmit = async (values: initialValueType) => {

    console.log(values,"bodyforaddcourse");
    
    try {
     
      const response = await addCourse(values.title,values.description,values.duration,values.level,values.courseFee,imageUrl);
      console.log('Course added successfully',response);
      console.log(response.data,"successmessage");
      
      setResSuccess(response.data)
      // navigate('/listOfCourses');
      setResError(undefined)
      toast.success('🦄 Course added successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    } catch (error:any) {
      console.error('Error adding course:', error?.response?.data?.message);
      setResSuccess(undefined)
      setResError(error?.response?.data?.message)
      toast.error('🦄 Course Already exist!', {
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


const handleImgUpload=async(e:React.ChangeEvent<HTMLInputElement>)=>{
  const file=e.target.files?.[0]
     if(file){
        let url=await generateUrl(file)
        console.log(url);
        
     }else{
      console.log("nulll");
      
     }

     
}


const handleImage=async(e:React.ChangeEvent<HTMLInputElement>)=>{
  e.preventDefault()
  try{
     const {data}=await designerAxios.post(`/user/imageAdd/${cid}`,{fileUrl})
  }catch(error){

  }
}

  

  return (
    <div className='flex'>
      <div className='w-1/5'>
        <Home />
      </div>
      <div className='m-32'>
        <div className='h-screen top-0 flex items-center justify-center'>
          <section className='signUp '>
            <div className='container_login '>
              <div className='signUp-content'>
                <div className='signUp-form '>
                  <h2 className='form-title text-lavender'>Add Course</h2>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {formik => (
                      <div>
                      <Form className='register-form ' id='register-form'>
                        
                        <div className=''>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 text-sm rounded-lg border w-full ${
                              formik.touched.title && formik.errors.title ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='title'
                          />
                          <ErrorMessage name='title' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 text-sm rounded-lg border w-full ${
                              formik.touched.description && formik.errors.description ? 'border-red-500' : ''
                            }`}
                            placeholder='description'
                            name='description'
                          />
                          <ErrorMessage name='description' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 text-sm rounded-lg border w-full ${
                              formik.touched.duration && formik.errors.duration ? 'border-red-500' : ''
                            }`}
                            placeholder='duration(month)'
                            name='duration'
                          />
                          <ErrorMessage name='duration' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 text-sm rounded-lg border w-full ${
                              formik.touched.level && formik.errors.level ? 'border-red-500' : ''
                            }`}
                            placeholder='level(Beginner, Intermediate, Advance)'
                            name='level'
                          />
                          <ErrorMessage name='level' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 text-sm rounded-lg border w-full ${
                              formik.touched.courseFee && formik.errors.courseFee ? 'border-red-500' : ''
                            }`}
                            placeholder='courseFee'
                            name='courseFee'
                          />
                          <ErrorMessage name='courseFee' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        
                        {loading ? (
              <div className="flex item-center justify-center w-14 h-14">
                <img src="/images/Stitchy.png" alt="" />
              </div>
            ) : (
              <div className="space-y-6 mb-8">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Image Preview"
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              )} 
              
              
              
              <div className='form-group'>
              {fileUrl?(
          <div className='w-full h-96 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl})` }}>
          <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
         <form>
         <div className='text-center'>
         <label>
         <input type="file" accept="image/*" name="file" className="hidden" multiple onChange={handleImgUpload} />
         <FontAwesomeIcon className='text-black' icon={faCamera} />
         </label>
         <div>
         {showButton && <button className='mt-80 bg-sky-950
          text-white rounded' onClick={handleImage}>upload</button>}
         </div>
          </div>
          </form>
            </div>
         
          </div>
      ):(
        <div className='w-full h-96 p-5  bg-gray-300 flex justify-end'>
        <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
       <form>
       <div className='text-center'>
       <label>
       <input type="file" accept="image/*" name="file" className="hidden" multiple onChange={handleImgUpload} />
       <FontAwesomeIcon className='text-black' icon={faCamera} />
       </label>
        </div>
        </form>
          </div>
       
        </div>
      )
    }
       
      </div>
             
              </div>
            )
            }
               
                       
                        </div>
                       


                        {/* <div className='w-[50px] bg-gray-600 h-10'>
                          
                        </div> */}
                        
                        {/* Repeat similar pattern for other fields */}
                        {/* ... */}
                        <div className='form-group form-button mt-5'>
                          <button
                            type='submit'
                            className='w-full text-white bg-[#22A78C] hover:bg-[#306c60] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                          >
                            SAVE
                          </button>
                        </div>
                      </Form>
                      <ToastContainer/>
                                       
                      </div>
                      
                    )}
                     
                  </Formik>
                </div>
                
              </div>
            </div>
          </section>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
   
   {/* <div className="mt-3">
                  <h1 className="text-sm">Upload video tutorial</h1>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                        <svg
                          aria-hidden="true"
                          className="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <h1 className="text-gray-500 text-sm">{videoName}</h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          MP4, MOV, AVI, etc.
                        </p>
                      </div>
                      <input
                        onChange={(e) => handleVideoUpload(e)}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="video/mp4,video/x-m4v,video/*"
                        name="course"
                      />
                    </label>
                  </div>
                </div>
                          */}

// <div className="text-center flex flex-col items-center justify-center items-center  ">
// {/* <!---<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// </svg>--> */}
// <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
// <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
// </div>
// <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
// </div>
  
//   const onSubmit = async (values: initialValueType) => {

//     console.log(values,"values of the course");
    
//    console.log(values.description);
//    try {
    
//     const Course =  await addCourse(
//         values.title,
//         values.description,
//         values.designer,
//         values.duration || 0,
//         values.level,
//         values.courseFee || 0, 
//         values.image,
//         values.startDate || new Date(), // Provide a default value if startDate is null
//         values.endDate || new Date() // Provide a default value if endDate is null
//     );
//    if(Course){
    
//     setResError(undefined)
//     navigate('/listOfCourses')
//    }
//    } catch (error:any) {
//     setResError(error?.response?.data?.message)
//     setResSuccess(undefined)
//    }
  
//   const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e);
//     const file = e.target.files ? e.target.files[0] : null; 
//   console.log(file);
//    if(!file)return;
  
//    try {
    
//     const base64 = await convertBase64(file);
//     setLoading(true);
//     const response = await designerAxios.post("uploadImage", { image: base64 });

//     setImageUrl(response.data);
//     setLoading(false);
//     toast.success("Image uploaded successfully");
//   } catch (error) {
//     console.error("Error uploading image:", error);
//   } finally {
//     setLoading(false);
//   }
// }
