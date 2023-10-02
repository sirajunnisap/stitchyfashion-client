import React,{useEffect, useState} from 'react'

import { useParams } from 'react-router-dom';
import { courseType, designerType } from '../../../Models/Models'
import {courseDetailsForAdmin } from '../../../Services/Course/courseData';
import { Link } from 'react-router-dom';
import { designerById } from '../../../Services/designer/designerData';
import Home from '../Home/Home';

// import { IonIcon } from 'react-ionicons';

function CourseDetail() {
  const {id} = useParams()

  console.log(id,"cousreidddddddd");
  
  const [courseData,setCourseData] = useState<courseType | undefined>(undefined)
  const [designerData,setDesigner]=useState<designerType|undefined>(undefined)

  useEffect(()=>{
    const getCourse = async()=>{
      try {
        
        const Course = await courseDetailsForAdmin(id);
        console.log(Course,"course");
        
    if(Course){
      const designerId = Course.designer
      
      console.log(designerId,"designer in coursedtails");

      // 
      
    }
        console.log(Course,"coursedetails");
        
       
        setCourseData(Course)


       const designerId = Course.designer
       const designerDetails = await designerById(designerId)
       console.log(designerDetails,"designerdetaillllllllllllllllllllll");
       setDesigner(designerDetails)

      } catch (error:any) {
        console.log(error);
        
      }
    }
    getCourse()
    
   
  },[id])
console.log(designerData,"designerData in state");


  return (
    <div >
        
            <div className='ml-60 mr-5 py-10 bg-[#0F5762] rounded-2xl'>
            <h2 className="ml-36 text-3xl tracking-tight font-bold text-white dark:text-white ">{courseData?.title}</h2>
                    <p className="ml-36 mt-3 w-[730px] font-light text-white sm:text-lg dark:text-gray-400">{courseData?.description}</p>
                    <p className='ml-36 text-sm m-5 text-white'>Created By </p>
                    <p className="ml-36 mb-1 text-sm font-normal text-white">
                {courseData?.duration}{" "}
                <span className=" text-sm font-normal text-white">
                  <span> .</span> {courseData?.level}
                </span>
              </p>
              <p className="ml-36 text-sm font-semibold text-white">
                ₹{courseData?.courseFee}
              </p> 
            </div>
            <div className=''>
            <div className='flex mb-20'>
                
                    {/* <img className='border rounded-3xl' src="/cardImage1.jpg" alt="" /> */}
                    
                    <div className="ml-60 mt-10 mb-0 w-2/3  flex flex-wrap">
      {courseData?.classes.map((classData) => (
        <div className="flex flex-col justify-center mb-4">
          <div className="relative flex flex-col w-[1000px] h-28 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-3xl  border border-white bg-white ">
            <div className="md:w-1/3 bg-white grid place-items-center">
            {classData.video && <video src={classData.video} className="rounded-xl h-24 w-56" controls controlsList='nodownload' />}
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 ">
              <div className="flex justify-between item-center"></div>

              <h3 className="font-bold  text-gray-800 md:text-lg text-lg">
                {classData.title}
              </h3>
              <p className="md:text-xs text-gray-500 text-xs">
                {classData.description}
              </p>
             
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='my-10  w-1/3'>
                <div className=''>
                    <h4 className='text-lg font-semibold mb-5'>Instructor</h4>
                    <h1 className='text-xl text-teal-600 font-bold'><Link className='border-b-2  border-black pb-0 -mb-1' to={`/getDesignerById/${designerData?._id}`}>{designerData?.name}</Link></h1>
                    <h6 className='text-base font-medium mt-3 text-gray-500'>{designerData?.field}</h6>
                    <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                  <div className="">
                    <div className="">
                      
                      <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full mx-auto absolute -ml-20 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
  
                    </div>
                  </div>
              
                </div>

                    {/* <h3 className='text-lg font-semibold mt-40'>About Me</h3> */}
                    <p className='mt-40 pr-10 text-sm '>{designerData?.aboutMe}</p>
                </div>
            </div>

                </div>
               

          
          

            </div>
            
           
        
           
    </div>
  )
}

export default CourseDetail
