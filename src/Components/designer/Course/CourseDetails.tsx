import React,{useEffect, useState} from 'react'
import Home from '../Home/Home'
import { useParams } from 'react-router-dom';
import { classes, courseType } from '../../../Models/Models'
import { addClass, courseDetails } from '../../../Services/designer/Coureses'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import EditCourse from './EditCourse';

function CourseDetails() {
  const {id} = useParams()
  const [courseData,setCourseData] = useState<courseType | undefined>(undefined)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [d,setD] = useState(false)


  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [fileUrl,setUrl]=useState<string|null>(null)
  const [showButton,setShowButton]=useState(false)


  const [formData,setFormData] = useState({
    title:"",
    description:"",

  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  
    const newClass:classes = {
       
      ...formData,
      video: fileUrl, 
      _id:id
    };

    try {  console.log(newClass,"body for add course");
      
    const response = await addClass(newClass);
    console.log('Course added successfully',response);
    
    // setResSuccess(response.data)
    // navigate('/listOfCourses');
    setResError(undefined)
    toast.success('🦄 class added successfully', {
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
  }



  const handleFileChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0]
    if(file){
       generateUrl(file)
    }else{
     console.log("nulll");
     
    }
 })
    
  const generateUrl=async(file:File)=>{

    try{
      console.log()
      const datas=new FormData()
      datas.append('file',file)
      datas.append('upload_preset','stitchy')
      datas.append('cloud_name','doottwqrx')
      console.log("hereeee????");
      
      
      const {data}=await axios.post(
        "https://api.cloudinary.com/v1_1/doottwqrx/video/upload",datas
      )

      setUrl(data.url)
      setD(true)
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


  useEffect(()=>{
    const getCourse = async()=>{
      try {
        
        const Course = await courseDetails(id);
    if(Course){
      const designerDetails = Course.designer
      
      console.log(designerDetails,"designer in coursedtails");
      
    }
        console.log(Course,"coursedetails");
        
       
        setCourseData(Course)

      } catch (error:any) {
        console.log(error);
        
      }
    }
    getCourse()
    
  },[id])



  return (
    
    <div>
        <div className="w-1/5 pr-10">
                <Home />
            </div>


          <div className='w-4/5 '>
           
    <div className='flex'>
      <div className='w-1/5'>
        <Home />
      </div>
      <div className=''>
        <div className='h-screen top-0 flex items-center justify-center '>
          {/* <section className='signUp '> */}
            <div className='container_login '>
              <div className='signUp-content'>
                <div className='signUp-form '>
                  <h2 className='form-title text-lavender'>Add Class</h2>
                  
                 
                    
                      <div>
                      <form onSubmit={handleSubmit}  className='register-form ' id='register-form'>
                        
                        <div className=''>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='title'
                            name='title'
                            value={formData.title}
                            onChange={handleInputChange}
                          />
                          
                        </div>
                        <div className='form-group'>
                          <label htmlFor='descrption'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                              
                            placeholder='description'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                          </div>
{/*                    
         */}
                        
                        
<div className='form-group'>
              {fileUrl?(
          <div className='w-full h-96 p-5 bg-cover flex justify-end' >
          
                  <video src={fileUrl}></video>
         
         
         </div>
        
      ):(
        <div className='w-full h-60 p-5 bg-white flex justify-center'>
        <div>
       <form>
       <div className='text-center'>
       <label>
       <input  type="file" accept="video/*" name="video" className="hidden" multiple onChange={handleFileChange} />
       <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
                                    <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="video"/>
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

               
                       
                        </div>
                       


                        <div className='form-group form-button mt-5'>
                          <button
                            type='submit'
                            className='w-full text-white bg-[#22A78C] hover:bg-[#306c60] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                          >
                            SAVE
                          </button>
                        </div>
                      </form> 
                      <ToastContainer/>
                                       
                      </div>
                      
                         
               
                </div>
                
              </div>
            </div>
          {/* </section>
          {/* ... */}
        </div>
      </div>
    </div>


    {courseData?.classes.map((classData) => (
      <div className="flex flex-col justify-center h-screen ml-40  ">
      <div
        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
        {classData.video && <video src={classData.video} className="rounded-xl" controls />}
      </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              {/* <p className="text-gray-500 font-medium hidden md:block">Vacations</p> */}
              {/* <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">(76 reviews)</span>
                </p>
              </div>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost</div> */}
            </div>
            
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">{classData.title}</h3>
            <p className="md:text-lg text-gray-500 text-base">{classData.description}</p>
            {/* <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">/night</span>
            </p> */}
          </div>
        </div>
      </div>
))}

          </div>
          
          
    </div>
    
  )
}

export default CourseDetails



// <div className='m-24 mb-0'>
// <div className=' w-full mt-20 mr-14 flex'>
//     <div className='w-1/2 m-48'>
//         <img className='border rounded-3xl' src="/cardImage1.jpg" alt="" />
//     </div>
//     <div className='ml-16 mb-4 mt-36 mr-32'>
//         <h2 className="ml-20 text-3xl tracking-tight font-bold text-[#07778B] dark:text-white">{courseData?.title}</h2>
//         <p className="my-10  font-light text-gray-500 sm:text-lg dark:text-gray-400">{courseData?.description}</p>
        {/* Fashion designers work in a variety of different ways when designing their pieces and accessories such as rings, bracelets, necklaces and earrings */}
              {/* <div className='flex flex-wrap '>

              <p className='text-base m-5 text-teal-600'>{courseData?.level} level</p>
        
        <p className='text-base m-5 text-teal-600'>Course Fee : ₹{courseData?.courseFee}</p>
        
              </div>
              
              
        <div className="flex flex-wrap justify-center mt-10">
 */}
{/* <div className=" sm:w-3/12 "> */}
{/* <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" /> */}
{/* </div>
<p className='mt-14 ml-5 text-xl'></p>
</div>
<div className="flex flex-col mt-10 ml-24  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4" onClick={openModal}>
                         */}
                        {/* <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
        View more
    </a>   */}
     {/* <i className='fas fa-edit mr2 text-lg'></i>
          Edit Course
                    </div>
    </div>

</div>

<EditCourse isOpen={isModalOpen} closeModal={closeModal} setCourse={setCourseData} CourseData={courseData}/>

</div> */}