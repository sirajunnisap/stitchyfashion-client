import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Home from '../Home'
import { categoryType, courseType } from '../../../Models/Models'
import { getAllCategory } from '../../../Services/Course/courseData'
import FooterHome from '../FooterHome'
import { Link } from 'react-router-dom'
import Categorycard from '../Cards/Categorycard'
import { categoryDetails } from '../../../Services/Course/categoryData'
import Courselisting from '../Cards/Courselisting'

function CategoryList() {
    const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
    const navigate = useNavigate()

    const { id } = useParams();
    const [courseData, setCourseData] = useState<courseType[] | undefined>(undefined);
  
  
    useEffect(() => {
      const getCategory = async () => {
        try {
          const Category = await categoryDetails(id)    
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


              <div className='flex flex-wrap items-center mt-10' >
              <div key={category?._id}  className="max-w-sm mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 motion-safe:hover:scale-110 transition-[2s]  cursor-pointer" onClick={()=> navigate(`/categoryDetails/${category._id}`)}>

                      <img className="rounded-t-lg w-full h-[170px] object-cover" src={category?.image} alt="" />
                  

                  <div className="p-4 pt-2 w-[300px] h-[180px]">
                     
                          <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{category?.name}</h2>
                   
                      <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">{category?.description}</p>

                  </div>
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
        </div>
            ))} 
        </div>
            </div>
    </div>

   
   
    </div>
  )
}

export default CategoryList
