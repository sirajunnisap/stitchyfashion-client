import React, { useState, useEffect } from 'react'
import Home from './Home'
import { courseType } from '../../Models/Models'
import { getAllCourses } from '../../Services/designer/Coureses'
import { useNavigate } from 'react-router-dom'
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
            <div className="w-1/5 pr-10">
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
      <div className=' m-36'>
      <div className=' w-full mt-20 mr-14 flex'>
                <div className='w-1/2'>
                    <img src="https://img.freepik.com/premium-vector/fashion-designer-illustration-concept-white-background_701961-3410.jpg?w=2000" alt="" />
                </div>
                <div className='ml-10 mb-4 mt-14 mr-32'>
                    <h2 className=" text-3xl tracking-tight font-bold text-[#07778B] dark:text-white">Fashion design !</h2>
                    <p className="mt-10 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. .</p>
                </div>
            </div>
      </div>
                  

            <div className='flex flex-wrap W-4/5 '>
            <div className='flex flex-col items-center'>
                    <div className=''>
                        <h2 className="mb-4  text-4xl tracking-tight font-extrabold text-[#07778B] dark:text-white relative">
                            Our Syllabus
                            {/* <span className="absolute bottom-0 left-1 transform  w-full h-0.5 bg-gray-400"></span> */}
                        </h2>
                    </div>
                    <div>
                        <p>"To cultivate exceptionally talented fashion designers through comprehensive <br />creative training and personalized mentorship."</p>
                    </div>
                    <div className='flex flex-wrap items-center mt-10 ml-48'>
                {
                    courseData?.map((course: courseType, index) => {
                        return (
                            <div className='flex flex-wrap items-center mt-10' onClick={()=> navigate('/courseDetails')}>
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
                            <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 mb-5">
                        <a href="#">
                            <img className="rounded-t-lg w-full h-[170px] object-cover" src="/cardImage1.jpg" alt="" />
                        </a>
                        <div className="p-4 pt-2 w-[300px] h-[180px]">
                            <a href="#">
                                <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h2>
                            </a>
                            <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#22A78C] rounded-lg hover:bg-[#288270] ">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a> */}
                        </div>
                    </div>
                    <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 mb-5">
                        <a href="#">
                            <img className="rounded-t-lg w-full h-[170px] object-cover" src="/cardImage1.jpg" alt="" />
                        </a>
                        <div className="p-4 pt-2 w-[300px] h-[180px]">
                            <a href="#">
                                <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h2>
                            </a>
                            <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#22A78C] rounded-lg hover:bg-[#288270] ">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a> */}
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
