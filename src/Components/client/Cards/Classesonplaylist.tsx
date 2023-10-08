import React from 'react'
import { useNavigate } from 'react-router-dom'

interface classitems{
    classItem:any
    setSelected:any
}
const Classesonplaylist:React.FC<classitems>=({classItem ,setSelected})=> {
    const navigate = useNavigate()
  return (
    <div className=" flex  items-center shadow-md justify-center  bg-white p-1 rounded-lg motion-safe:hover:scale-110 transition-[2s]"onClick={()=>setSelected(classItem.video)}>
       <div className="w-full md:w-1/3 bg-white grid place-items-center  ">
        <video src={classItem.video} controls className='rounded-s '></video>
       </div>
       <div className="w-full flex flex-col items-center justify-center   bg-white p-2 ">
        
         <h3 className="font-black text-gray-800 ">{classItem.title}</h3>
         <p className="md:text-xs text-gray-500 text-base">{classItem.description}</p>
       </div>
     </div>
  )
}

export default Classesonplaylist
