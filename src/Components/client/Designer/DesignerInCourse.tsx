import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courseType, designerType } from '../../../Models/Models'
import { designerById } from '../../../Services/designer/designerData'
import Home from '../Home'
import FooterHome from '../FooterHome'
import { getAllCourses, getAllDesignerCourses } from '../../../Services/Course/courseData'

function DesignerInCourse() {
    const {id} = useParams()
    const [designerData,setDesigner] = useState<designerType|undefined>(undefined)
    const [courseData,setCourseData] = useState<courseType[]|undefined>(undefined)

    const navigate = useNavigate()
    useEffect(()=>{
        const getDesigner = async()=>{
            try {
                const designer = await designerById(id)
                console.log(designer,"designerdatas");
                setDesigner(designer)

                const getCourse = await getAllDesignerCourses(id)
                setCourseData(getCourse)
                

            } catch (error) {
                
            }
        }
        getDesigner()
    },[id])

    console.log(courseData,"courses in a designer id");
    
  return (
    <div>
       <div className="w-1/5 pr-10">
                <Home />
            </div>
            <div className='flex m-20 mt-40'>
            <div className=' mr-16'>

<div className='w-[600px]'>
    <h4 className='text-lg font-semibold'>INSTRUCTOR</h4>
    <h1 className='text-4xl font-bold'>{designerData?.name}</h1>
    <h6 className='text-base font-semibold mt-3'>{designerData?.field}</h6>
    <div className="mt-10 sm:w-3/12 ">
<img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
</div>
    <h3 className='text-lg font-semibold mt-10'>About Me</h3>
    <p className='mt-4 '>{designerData?.aboutMe}</p>
</div>
</div>

            <div className="mt-32 ">
                           {
                    courseData?.map((course: courseType, index) => {
                      return (
        <div className="flex flex-col justify-center mb-4 ">
          <div className='w-[700px]'>
          <div className="relative h-[130px] flex flex-col  md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white " onClick={()=>navigate(`/courseDetails/${course._id}`)}>
           

           
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
              <img
                src={course?.image}
                alt=""
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col">
              <div className="flex justify-between item-center"></div>

              <h3 className="font-bold font-sans text-gray-800 md:text-lg text-base">
                {course.title}
              </h3>
              <p className="md:text-sm text-gray-500 text-sm">
                {course.description}
              </p>
              <p className="text-xs font-normal text-gray-600 mt-1">
                {course.duration}{" "}
                <span className="text-xs font-normal text-gray-700">
                  <span> .</span> {course.level}
                </span>
              </p>
              <p className="text-sm font-semibold text-gray-600">
                ₹{course.courseFee}
              </p>
            </div>
            </div>
          </div>
        </div>
        )})}
    </div>
            </div>
            
    </div>
  )
}

export default DesignerInCourse
