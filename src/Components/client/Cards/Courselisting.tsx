import React from 'react'
import { useNavigate } from 'react-router-dom'

interface classdetails{
  classData:any
}
const Courselisting:React.FC<classdetails>=({classData})=> {
  const navigate = useNavigate()
  return (
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

              <button className='bg-teal-600 rounded-lg px-28 py-2   text-white font-bold'>View</button>
           
              </div> </div>

          </div>
  )
}

export default Courselisting
