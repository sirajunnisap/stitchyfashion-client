import React, { useState, useEffect } from 'react'
import { categoryType } from '../../../Models/Models'
import { getAllCategory } from '../../../Services/admin/addCategory'
import EditCategory from './EditCategory'
import { useNavigate } from 'react-router-dom'

function CategoryList() {
    const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
    const [editCategory, setEditCategory] = useState<categoryType | undefined>(undefined)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editCategoryIndex, setEditCategoryIndex] = useState<number | undefined>(undefined)

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

    function openModal(categoryData: categoryType, index: number) {
        setEditCategory(categoryData)
        setEditCategoryIndex(index);
        setIsModalOpen(true)
    }
    function closeModal() {


        setIsModalOpen(false)
    }


    return (
        <>
            <div className={isModalOpen ? 'blur' : ''}>




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
                        <div className='flex flex-wrap items-center mt-10 ml-48'>
                            {
                                categoryData?.map((category: categoryType, index) => {


                                    return (



                                        <div className='flex flex-wrap items-center mt-10' key={category._id}>
                                            <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5" >
                                                <div onClick={()=> navigate(`/admin/categoryDetails/${category._id}`)}>
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
                                           
                                                <div className=" py-3 border-t border-blueGray-200 text-center">
                                                    <div className="flex flex-wrap justify-center">
                                                        <div className="w-full lg:w-9/12 px-4 font-normal text-pink-500 cursor-pointer" onClick={() => openModal(category, index)}>


                                                            <i className='fas fa-edit mr2 text-lg'></i>
                                                            Edit

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })}



                        </div>
                    </div>
                </div>
            </div>
            <EditCategory
                isOpen={isModalOpen}
                closeModal={closeModal}
                setCategoryData={setCategoryData}
                categoryData={editCategory}
                editCategoryIndex={editCategoryIndex}
            />
        </>
    )
}

export default CategoryList
