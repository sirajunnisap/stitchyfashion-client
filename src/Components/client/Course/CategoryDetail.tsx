import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryType, courseType } from '../../../Models/Models'
import { categoryDetails } from '../../../Services/Course/categoryData'
import Home from '../Home'
import FooterHome from '../FooterHome'
import { getAllCategory } from '../../../Services/Course/courseData'
import { Link } from 'react-router-dom'

function CategoryDetail() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState<courseType[] | undefined>(undefined);
  const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)

  const navigate = useNavigate()
  useEffect(() => {
    const getCategory = async () => {
      try {
        const Category: courseType[] = await categoryDetails(id);
        console.log(Category, "categoryDetails");
        setCourseData(Category);
      } catch (error) {
        // Handle error here
      }
    };
    getCategory();
  }, [id]);

  useEffect(() => {

    const getCategory = async () => {
      try {

        const Category = await getAllCategory()
        setCategoryData(Category)

      } catch (error: any) {
        console.log(error);
      }
    }
    getCategory()
  }, [])

  console.log(courseData?.map((classData) => classData.title), "classdata title");

  return (
    <div>
      <div className="w-1/5 pr-10">
        <Home />
      </div>
      <div className='fixed top-20 bg-white border-y-2 border-gray-200 h-[45px] w-full '>
        <ul className=" flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center justify-center">
          {categoryData?.map((category: categoryType, index) => {
            return (

              <li>
                <p onClick={() => navigate(`/categoryDetails/${category._id}`)} className="block ml-5 mt-2 py-6 text-sm text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{category.name}</p>
              </li>

            )
          })}
        </ul>
      </div>
      <div>

      </div>



      <div className='flex flex-wrap items-center justify-center mt-40  cursor-pointer'>
        {courseData?.map((classData) => (
          <div className='flex flex-wrap items-center mr-3  motion-safe:hover:scale-110 transition-[2s]' onClick={() => navigate(`/courseDetails/${classData._id}`)}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <a href="#">
                <img className="rounded-t-lg w-full h-[170px] object-cover" src={classData.image} alt="" />
              </a>

              <div className="p-4 pt-2 w-[300px] h-[180px]">
                <a href="#">
                  <h2 className="mb-1 text-base font-black tracking-tight text-gray-900 dark:text-white">{classData.title}</h2>
                </a>
                <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400"> {classData.description}</p>
                <p className="text-xs font-normal text-gray-600">
                  {classData.duration}{" "}
                  <span className="text-xs font-normal text-gray-700">
                    <span> .</span> {classData.level}
                  </span>
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  ₹{classData.courseFee}
                </p>


              </div>
              <div className='mb-3 flex items-center justify-center'>

              <button className='bg-teal-600 rounded-xl px-20 py-2   text-white font-bold'>View</button>
           
              </div> </div>

          </div>

        ))}



      </div>

      {/* <div className="mt-40 ">
        {courseData?.map((classData) => (
          <div className="flex flex-col  mb-4 ">
            <div className=" flex flex-col ml-20 h-36 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl border border-white bg-white motion-safe:hover:scale-110 transition-[2s] cursor-pointer" onClick={() => navigate(`/courseDetails/${classData._id}`)}>
              <div className="w-full md:w-1/3  bg-white grid place-items-center">
                <img
                  src={classData.image}
                  alt=""
                  className="w-full h-32 object-cover rounded-xl "
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col">
                <div className="flex justify-between item-center"></div>

                <h3 className="font-black text-gray-800 md:text-lg text-lg">
                  {classData.title}
                </h3>
                <p className="md:text-sm text-gray-500 text-sm">
                  {classData.description}
                </p>
                <p className="text-xs font-normal text-gray-600">
                  {classData.duration}{" "}
                  <span className="text-xs font-normal text-gray-700">
                    <span> .</span> {classData.level}
                  </span>
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  ₹{classData.courseFee}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

    </div>
  )
}

export default CategoryDetail








