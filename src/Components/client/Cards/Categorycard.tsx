import React from 'react'
import { categoryType } from '../../../Models/Models'
import { useNavigate } from 'react-router-dom'

interface categoryData{
    category:categoryType
}
const Categorycard:React.FC<categoryData>=({category})=> {

    const navigate = useNavigate()
  return (
    <div className='flex flex-wrap items-center mt-10' >
                                    <div className="max-w-sm mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 motion-safe:hover:scale-110 transition-[2s]  cursor-pointer" onClick={()=> navigate(`/categoryDetails/${category._id}`)}>
                                      
                                            <img className="rounded-t-lg w-full h-[170px] object-cover" src={category?.image} alt="" />
                                        

                                        <div className="p-4 pt-2 w-[200px] h-[150px]">
                                           
                                                <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{category?.name}</h2>
                                         
                                            <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">{category?.description}</p>

                                        </div>
                                    </div>

                                </div>
  )
}

export default Categorycard
