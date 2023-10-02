import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { categoryType, courseType } from '../../../Models/Models';
import { categoryDetails, getAllCategory } from '../../../Services/admin/addCategory';

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

export default CategoryDetail
