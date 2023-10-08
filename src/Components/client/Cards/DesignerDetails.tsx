import React from 'react'
import { designerType } from '../../../Models/Models'
import { Link } from 'react-router-dom'


interface designerData {
    designerData:designerType|undefined
}
const DesignerDetails:React.FC<designerData>=({designerData})=> {

  return (
    <div>
       <h4 className='text-lg font-semibold mb-5'>Instructor</h4>
          <h1 className='text-xl text-teal-600 font-bold'><Link className='border-b-2  border-black pb-0 -mb-1' to={`/getDesignerById/${designerData?._id}`}>{designerData?.name}</Link></h1>
          <h6 className='text-base font-medium mt-3 text-gray-500'>{designerData?.field}</h6>
          <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="">
              <div className="">

                <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full mx-auto absolute -ml-24 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />

              </div>
            </div>

          </div>

          {/* <h3 className='text-lg font-semibold mt-40'>About Me</h3> */}
          <p className='mt-40 text-sm '>{designerData?.aboutMe}</p>
    </div>
  )
}

export default DesignerDetails
