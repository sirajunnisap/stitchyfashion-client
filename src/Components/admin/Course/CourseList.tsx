import React,{useState,useEffect} from 'react'
import Home from '../Home/Home'
import { categoryType, courseType } from '../../../Models/Models'
import {  getAllCoursesForAdmin } from '../../../Services/Course/Coureses'
import { useNavigate } from 'react-router-dom'
import { getAllCategory } from '../../../Services/admin/addCategory'

function CourseList() {
    
  const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
  const [courseData, setCourseData] = useState<courseType[] | undefined>(undefined)

  const navigate = useNavigate()
  useEffect(() => {

    const getCourse = async () => {
      try {

        const Category = await getAllCategory()
        setCategoryData(Category)

        const Courses = await getAllCoursesForAdmin()
        setCourseData(Courses)

      } catch (error: any) {
        console.log(error);
      }
    }
    getCourse()
  }, [])
 


    return (
        <div className='flex'>
           
    



     
           
                           <div className="mt-24 ml-40 ">
                           {
                    courseData?.map((course: courseType, index) => {
                      return (
        <div className="flex flex-col justify-center mb-4 ">
          <div className='w-[1000px]'>
          <div className="relative h-[130px] flex flex-col  md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white " onClick={()=>navigate(`/admin/courseDetails/${course._id}`)}>
           

           
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

    <div className='fixed right-20 mt-24 border border-white bg-white flex flex-col items-center justify-center mb-4 rounded-xl shadow-lg '>
            
              {categoryData?.map((category: categoryType, index) => {
      return (
        <ul className="px-10 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center justify-center">
                            <li>
                                <p onClick={()=> navigate(`/admin/categoryDetails/${category._id}`)} className="mb-6 mt-6 py-6 text-sm text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{category.name}</p>
                            </li>
                            </ul>
                            )
                          })}
                      
</div>
        </div>
    )
}

export default CourseList






{/* <div className='flex flex-wrap W-4/5 ml-20 m-10 '>

{
        courseData?.map((course: courseType, index) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 mb-5">
        <a href="#">
        <img className="rounded-t-lg w-full h-[200px] object-cover" src={course?.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course?.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course?.description}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#22A78C] rounded-lg hover:bg-[#288270] ">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </div>
          )})}
    
               </div> */}