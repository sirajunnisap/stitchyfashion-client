import React, { useEffect, useState } from 'react'
import { courseType } from '../../../Models/Models'
import { courseDetails } from '../../../Services/Course/courseData'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
      

<div className='ml-40'>
      <div className='ml-12 mt-3 rounded-2xl h-[250px] bg-[#22A78C] w-[1320px]'>
        <div>
          <h2 className="ml-36 text-3xl tracking-tight font-bold text-white dark:text-white pt-10">{courseData?.title}</h2>
          <p className="ml-36 mt-3 w-[730px] font-light text-white sm:text-lg dark:text-gray-400">{courseData?.description}</p>
          {/* <p className='ml-36 text-sm m-5 text-white'>Created By <k to={`/getDesignerById/${designerData?._id}`} className='text-black'>{designerData?.name}</Link> </p> */}
          <p className="ml-36 mb-1 text-sm font-normal text-white">
            {courseData?.duration}{" "}
            <span className=" text-sm font-normal text-white">
              <span> .</span> {courseData?.level}
            </span>
          </p>
          <p className="ml-36 text-sm font-semibold text-white">
            ₹{courseData?.courseFee}
          </p>

          <Link to={`/designer/addClass/${courseData?._id}` } className="ml-36 mt-2 inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-[#22A78C] bg-white rounded-full">
            Add Class
          </Link>
        </div>
      </div>
      <div className=" mt-20">
        {courseData?.classes.map((classData) => (
          <div className="flex flex-col justify-center  mb-4">
            <div className=" relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white ">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                {classData.video && <video src={classData.video} className="rounded-xl" controls controlsList='nodownload' />}
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center"></div>

                <h3 className="font-black text-gray-800 md:text-lg text-lg">
                  {classData.title}
                </h3>
                <p className="md:text-sm text-gray-500 text-sm">
                  {classData.description}
                </p>
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
            </div>
          </div>
        ))}
      </div>




    </div>

    </div>
  )
}

export default CourseDetail


