import React, { useEffect, useState } from 'react'
import { courseType } from '../../../Models/Models'
import { courseDetails } from '../../../Services/Course/courseData'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import EditCourse from './EditCourse'
import AddClass from './AddClass'

function CourseDetail() {

    const { id } = useParams()
    const [courseData, setCourseData] = useState<courseType | undefined>(undefined)


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
  return (
    <div>
      

<div className='ml-48 mb-20'>
      <div className='fixed z-50 top-5 ml-12 pl-10 rounded-2xl h-[250px] bg-[#0f5762] w-[1280px]'>
        <div>
          <h2 className="relative text-2xl tracking-tight font-bold text-white dark:text-white pt-6">{courseData?.title}</h2>
          <p className=" mt-3 mb-2 font-light text-white sm:text-lg dark:text-gray-400">{courseData?.description}</p>
          {/* <p className='ml-36 text-sm m-5 text-white'>Created By <k to={`/getDesignerById/${designerData?._id}`} className='text-black'>{designerData?.name}</Link> </p> */}
          <p className=" mb-1 text-sm font-normal text-white">
            {courseData?.duration}{" "}
            <span className=" text-sm font-normal text-white">
              <span> .</span> {courseData?.level}
            </span>
          </p>
          <p className=" text-sm mb-4 font-semibold text-white">
            ₹{courseData?.courseFee}
          </p>

          <Link to={`/designer/addClass/${courseData?._id}` } className=" mt-2 inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-[#22A78C] bg-white rounded-full">
            Add Class
          </Link>
          <Link to={`/designer/editCourse/${courseData?._id}` } className=" mt-2 ml-5 inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-[#22A78C] bg-white rounded-full">
           Edit Course
          </Link>
        </div>
      </div>
      {/* <div className="mt-72">
        {courseData?.classes.map((classData) => (
          <div className="flex flex-col justify-center ml-16 mb-4">
            <div className="h-32  flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl  border border-white bg-white ">
              <div className=" md:w-1/3 bg-white grid place-items-center ">
                {classData.video && <video src={classData.video} className=" rounded-xl w-full h-24" controls controlsList='nodownload' />}
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2">
                <div className="flex justify-between item-center"></div>

                <h3 className="font-black text-gray-800 md:text-lg text-lg">
                  {classData.title}
                </h3>
                <p className="md:text-sm text-gray-500 text-sm">
                  {classData.description}
                </p>
               
              </div>
            </div>
          </div>
        ))}
      </div> */}


      <div className='flex flex-wrap  mt-72 ml-16 cursor-pointer'>
      {courseData?.classes.map((classData) => (
          <div className='flex flex-wrap items-center mr-3 mb-3 motion-safe:hover:scale-110 transition-[2s]' >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <a href="#">
              {classData.video && <video src={classData.video} className=" rounded-t-xl w-full h-32" controls controlsList='nodownload' />}
              </a>

              <div className="p-4 pt-2 w-[300px] h-[180px]">
                <a href="#">
                  <h2 className="mb-1 text-base font-black tracking-tight text-gray-900 dark:text-white">{classData.title}</h2>
                </a>
                <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400"> {classData.description}</p>
                {/* <p className="text-xs font-normal text-gray-600">
                  {classData.duration}{" "}
                  <span className="text-xs font-normal text-gray-700">
                    <span> .</span> {classData.level}
                  </span>
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  ₹{classData.courseFee}
                </p> */}


              </div>
              {/* <div className='mb-3 flex items-center justify-center'>

              <button className='bg-teal-600 rounded-xl px-20 py-2   text-white font-bold'>View</button>
           
              </div>  */}
              </div>

          </div>

        ))}



      </div>
 
              {/* <div>
                <button className=' fixed right-60 top-96 font-extrabold text-white bg-[#17616c] px-10 py-2 rounded-xl'>
                  Edit Course
                </button>
              </div> */}

    </div>

    </div>
  )
}

export default CourseDetail


