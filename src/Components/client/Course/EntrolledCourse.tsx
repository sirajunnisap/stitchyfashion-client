import React ,{ useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import { courseType, designerType } from '../../../Models/Models'
import { courseDetails } from '../../../Services/Course/courseData'
import Classesonplaylist from '../Cards/Classesonplaylist'
import { designerById } from '../../../Services/designer/designerData'
import { Link } from 'react-router-dom'
function EntrolledCourse() {

    const courseid =  useParams()
    const [courseState,SetCourseState] = useState<courseType>()
    const [selected,setSelected] = useState<string|undefined>(undefined)
    const [designerData, setDesigner] = useState<designerType | undefined>(undefined)

    const id :string|undefined= courseid.id
    useEffect(()=>{
       const getcourse = async()=>{
           try {
            const Course = await courseDetails(id);

            if(Course){
              const designerId = Course.designer

            }
               console.log(Course,'get course by id');
               SetCourseState(Course)

            const designerId = Course.designer
            const designerDetails = await designerById(designerId)
            setDesigner(designerDetails)

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


 
    
            <div className="flex items-center justify-center ">
              <div className="w-2/3 flex">

                <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full w-20 h-20 shadow-md border-2 border-white transition duration-200 transform hover:scale-110" />
              
             <h2 className='text-xl text-teal-600 font-bold mt-6 ml-3'> {designerData?.name}</h2>
            
              </div>
           

            
                     <Link className=' bg-teal-600 rounded-xl px-10 py-2 ml-2  text-white font-bold' to={`/chatWithDesigner/${designerData?._id}`}>Connect</Link>
             <Link className='bg-teal-600 rounded-xl px-10 py-2  ml-6 text-white font-bold' to={`/getDesignerById/${designerData?._id}`}>View</Link>

             
            </div>

        
    </div>
 
</div>
</div>

<div className="flex flex-col mt-20 ml-10 gap-3 w-1/2 cursor-pointer"  >
   
   {courseState && Array.isArray(courseState.classes) && courseState.classes.length > 0 ? (
     courseState.classes.map((classItem:any, index) => (
     < Classesonplaylist classItem={classItem} setSelected={setSelected}/>
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







