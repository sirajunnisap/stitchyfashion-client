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
    const [categoryData,setCategoryData] = useState<categoryType[] | undefined>(undefined)

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
  
    console.log(courseData?.map((classData)=>classData.title),"classdata title");
    
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
                                <p onClick={()=> navigate(`/categoryDetails/${category._id}`)} className="block ml-5 mt-2 py-6 text-sm text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{category.name}</p>
                            </li>
                            
                            )
                          })}
                        </ul>
</div>
          <div>

		  </div>

               {/* <div className=' mt-36'>
  <ul className='flex space-x-3'>
    {categoryData?.map((category: categoryType, index) => {
      return (
        <li key={index}>
          <div className='w-[200px] h-[80px] bg-white text-teal-500 border border-black mb-20 relative hover:bg-teal-500 hover:text-white'>
            <div className='h-full flex items-center justify-center'>
              <p className='text-xl'>{category.name}</p>
            </div>
          </div>
        </li>
      )
    })}
  </ul>
</div> */}



            <div className="mt-36">
      {courseData?.map((classData) => (
        <div className="flex flex-col justify-center -ml-28 mb-4">
          <div className=" flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white " onClick={()=>navigate(`/courseDetails/${classData._id}`)}>
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
              <img
                src={classData.image}
                alt=""
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
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
    </div>
    
    </div>
  )
}

export default CategoryDetail



 {/* <p className="text-gray-500 font-medium hidden md:block">Vacations</p> */}
                {/* <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">(76 reviews)</span>
                </p>
              </div>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost</div> 
			
			
			
			
			
			
			
			
			
			
			
			  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-40">
  <div className="relative mx-auto w-full">
	<a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
	  <div className="shadow p-4 rounded-lg bg-white">
		<div className="flex justify-center relative rounded-lg overflow-hidden h-52">
		 <p className='text-black'> {categoryData?.map((classData) => ( <p>{classData.title}</p>))}</p>
		  

		 
		</div>

		

		
	  </div>
	</a>
  </div>
</div>*/}