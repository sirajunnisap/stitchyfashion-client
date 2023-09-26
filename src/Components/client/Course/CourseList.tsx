import React, { useState, useEffect } from 'react'
import Home from '../Home'
import { categoryType, courseType } from '../../../Models/Models'

import { useNavigate } from 'react-router-dom'
import { getAllCategory, getAllCourses } from '../../../Services/Course/courseData'
import FooterHome from '../FooterHome'
function CourseList() {

    const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
    const navigate = useNavigate()
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

<div className='flex flex-wrap W-4/5 ml-28 mt-28'>
    <div className='flex flex-col items-center'>
            <div className=''>
                <h2 className="mb-4  text-4xl tracking-tight font-extrabold text-[#07778B] dark:text-white relative">
                    Categories
                    {/* <span className="absolute bottom-0 left-1 transform  w-full h-0.5 bg-gray-400"></span> */}
                </h2>
            </div>
            <div>
                <p>"To cultivate exceptionally talented fashion designers through comprehensive <br />creative training and personalized mentorship."</p>
            </div>
            <div className='flex flex-wrap items-center mt-10 ml-48 cursor-pointer'>
        {
            categoryData?.map((category: categoryType, index) => {
                return (
                    <div className='flex flex-wrap items-center mt-10 motion-safe:hover:scale-110 transition-[2s]' onClick={()=> navigate(`/courseDetails/${category._id}`)}>
                    <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
                        <a href="#">
                            <img className="rounded-t-lg w-full h-[170px] object-cover" src={category?.image} alt="" />
                        </a>

                        <div className="p-4 pt-2 w-[300px] h-[180px]">
                            <a href="#">
                                <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{category?.name}</h2>
                            </a>
                            <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">{category?.description}</p>
                           
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
