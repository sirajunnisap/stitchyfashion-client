import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../Home'
import { categoryType } from '../../../Models/Models'
import { getAllCategory } from '../../../Services/Course/courseData'
import FooterHome from '../FooterHome'
import { Link } from 'react-router-dom'
import Categorycard from '../Cards/Categorycard'

function CategoryList() {
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
    <div>
      <div className="w-1/5 pr-10">
                <Home />
            </div>
           
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
            categoryData?.map((category, index) => (
               < Categorycard category={category}/>
            ))} 
        </div>
            </div>
    </div>
  
    </div>
  )
}

export default CategoryList
