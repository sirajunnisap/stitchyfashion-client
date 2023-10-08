import React from 'react'

interface classdata{
  classData:any
}
const Classcard:React.FC<classdata>=({classData})=> {
  return (
    <div className="flex flex-col  justify-center  mb-4">
                <div className="relative flex flex-col w-[800px] h-[100px] md:flex-row md:space-x-5  md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white ">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    {classData.video && <video src={classData.video} className="rounded-xl"   />}
                  </div>
                  <div className="w-full  bg-white flex flex-col  p-3">
                    <div className="flex justify-between item-center"></div>

                    <h3 className="font-bold text-gray-800 md:text-lg text-lg">
                      {classData.title}
                    </h3>
                    <p className="md:text-sm text-gray-500 text-sm">
                      {classData.description}
                    </p>
                   
                  </div>
                </div>
              </div>
  )
}

export default Classcard
