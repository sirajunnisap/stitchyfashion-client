import React, { useState, useEffect } from 'react'
import { courseType } from '../../../Models/Models'
import { getAllCourses } from '../../../Services/designer/Coureses'
import { useNavigate } from 'react-router-dom'
import Home from '../Home/Home'
function CourseList() {

    const [courseData, setCourseData] = useState<courseType[] | undefined>(undefined)
    const navigate = useNavigate()
    useEffect(() => {

        const getCourse = async () => {
            try {

                const Courses = await getAllCourses()
                setCourseData(Courses)

            } catch (error: any) {
                console.log(error);
            }
        }
        getCourse()
    }, [])


    return (
        <div className=''>
        <div className='w-1/5'>
          <Home />
        </div>
            {/* <div className=''>
      <div className="search">
  <form id="searchFormTop" action="" method="get">

    <input type="text" className="searchbox" name="q" id="q" placeholder="Search..."/>
    <span className="search-btn-wrap">
    <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
      </span>
  </form>
</div>


      </div> */}
      
                  

            <div className='flex flex-wrap W-4/5 ml-40 '>
            <div className='flex flex-col items-center'>
                    <div className='ml-40 mt-20'>
                        <h2 className="mb-4  text-4xl tracking-tight font-extrabold text-[#07778B] dark:text-white relative">
                            Our Syllabus
                            {/* <span className="absolute bottom-0 left-1 transform  w-full h-0.5 bg-gray-400"></span> */}
                        </h2>
                    </div>
                    <div>
                        <p className='ml-40'>"To cultivate exceptionally talented fashion designers through comprehensive <br />creative training and personalized mentorship."</p>
                    </div>
                    <div className='flex flex-wrap items-center mt-10 ml-48'>
                {
                    courseData?.map((course: courseType, index) => {
                        return (
                            <div className='flex flex-wrap items-center mt-10' onClick={()=> navigate(`/designer/courseDetails/${course._id}`)}>
                            <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-[170px] object-cover" src="/cardImage1.jpg" alt="" />
                                </a>
    
                                <div className="p-4 pt-2 w-[300px] h-[180px]">
                                    <a href="#">
                                        <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{course?.title}</h2>
                                    </a>
                                    <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">{course?.description}</p>
                                   
                                </div>
                            </div>
                          
                            </div>
                            
                        )
                    })}
                            
               
                  
                </div>
                    </div>
            </div>
        </div>
    )
}

export default CourseList