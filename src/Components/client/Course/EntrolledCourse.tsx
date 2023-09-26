import React ,{ useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import { courseType } from '../../../Models/Models'
import { courseDetails } from '../../../Services/Course/courseData'

function EntrolledCourse() {

    const courseid =  useParams()
    const [courseState,SetCourseState] = useState<courseType>()
    const [selected,setSelected] = useState<string|undefined>(undefined)


    const id :string|undefined= courseid.id
    useEffect(()=>{
       const getcourse = async()=>{
           try {
            const Course = await courseDetails(id);
               console.log(Course,'get course by id');
               SetCourseState(Course)
           } catch (error) {
               
           }
       }
       getcourse()
    },[])

    
  return (
    <div>
      <div className='flex mt-10 ml-10 mr-20'>




<div className="w-1/2">
<div className="mt-20 ml-10 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
 
    <div className="h-96">
      {selected ? (<video src={selected? selected: courseState?.image} controls className='rounded-t-lg h-96 w-full'></video> ):(<a href="">
        <img
        src={courseState?.image}
          className="w-full h-full rounded-t-lg object-cover"
          
          alt=""
        />
     
      </a>)
         
         }
       
  <div className="p-3">
    <a href="#">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black ">
        {courseState?.title}
      </h5>
    </a>
    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 overflow h-20">
      <div className="line-clamp-3 pt-4">
       {courseState?.description}
      </div>
    </p>
  </div>
    </div>
 
</div>
</div>

<div className="flex flex-col mt-20 ml-10 gap-3 w-1/2 cursor-pointer"  >
   
   {courseState && Array.isArray(courseState.classes) && courseState.classes.length > 0 ? (
     courseState.classes.map((classItem:any, index) => (
     <div className=" flex  items-center shadow-md justify-center  bg-white p-1 rounded-lg motion-safe:hover:scale-110 transition-[2s]"onClick={()=>setSelected(classItem.video)}>
       <div className="w-full md:w-1/3 bg-white grid place-items-center  ">
        <video src={classItem.video} controls className='rounded-s '></video>
       </div>
       <div className="w-full flex flex-col items-center justify-center   bg-white p-2 ">
        
         <h3 className="font-black text-gray-800 ">{classItem.title}</h3>
         <p className="md:text-xs text-gray-500 text-base">{classItem.description}</p>
       </div>
     </div>
   ))
   )  : (
     <p>No classes available</p>
   )}
     {/* Third Card */}
     
     {/* End of Stacked Vertical Cards*/}
   </div>
</div>



    </div>
  )
}

export default EntrolledCourse







