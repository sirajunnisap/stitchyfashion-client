import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../Home'
import { categoryType } from '../../../Models/Models'
import { getAllCategory } from '../../../Services/Course/courseData'
import FooterHome from '../FooterHome'
import { Link } from 'react-router-dom'

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
            {/* <div className='mt-20 border-y-2 border-gray-200 h-[45px] w-full '>
            <ul className=" flex flex-col mt-4  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                           
                            <li>
                                <Link to={"/"} className="block py-6 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">HOME</Link>
                            </li>
                            
                         
                        </ul>
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

            <div className='  w-full p-10 flex justify-center  items-center gap-6 first-letter '>
            {/* <div className='w-[50px] h-[50px] bg-green-700 rounded-full  shadow-md shadow-black '>

</div><div className='w-[50px] h-[50px] bg-green-700 rounded-full  shadow-md shadow-black '>

</div><div className='w-[50px] h-[50px] bg-green-700 rounded-full  shadow-md shadow-black '>

</div><div className='w-[50px] h-[50px] bg-green-700 rounded-full  shadow-md shadow-black '>

</div> */}

<ul>
    <li>

    </li>
    

</ul>
               
            </div>

            <div className='flex flex-wrap items-center mt-10 ml-48'>
        {
            categoryData?.map((category: categoryType, index) => {
                return (
                    <div className='flex flex-wrap items-center mt-10' onClick={()=> navigate(`/categoryDetails/${category._id}`)}>
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

export default CategoryList
