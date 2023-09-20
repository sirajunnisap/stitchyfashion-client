import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { designerType } from '../../../Models/Models'
import { designerById } from '../../../Services/designer/designerData'
import Home from '../Home'
import FooterHome from '../FooterHome'

function DesignerInCourse() {
    const {id} = useParams()
    const [designerData,setDesigner] = useState<designerType|undefined>(undefined)

    useEffect(()=>{
        const getDesigner = async()=>{
            try {
                const designer = await designerById(id)
                console.log(designer,"designerdatas");
                setDesigner(designer)
            } catch (error) {
                
            }
        }
        getDesigner()
    },[id])
  return (
    <div>
       <div className="w-1/5 pr-10">
                <Home />
            </div>
            <div className='mt-40 ml-96'>
                <div className='w-[600px]'>
                    <h4 className='text-lg font-semibold'>INSTRUCTOR</h4>
                    <h1 className='text-4xl font-bold'>{designerData?.name}</h1>
                    <h6 className='text-base font-semibold mt-3'>{designerData?.field}</h6>
                    <div className="mt-10 sm:w-3/12 ">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
                    <h3 className='text-lg font-semibold mt-10'>About Me</h3>
                    <p className='mt-4 '>{designerData?.aboutMe}</p>
                </div>
            </div>
           
    </div>
  )
}

export default DesignerInCourse
