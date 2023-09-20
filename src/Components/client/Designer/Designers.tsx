import React,{useState,useEffect} from 'react'
import Home from '../Home'
import { designerType } from '../../../Models/Models'
import { getAllDesignerData } from '../../../Services/designer/designerData'
import FooterHome from '../FooterHome'

function DesignersList() {
  
  const [designersData, setDesignersData] = useState<designerType[] | undefined>(undefined)

  useEffect(() => {

    const getDesigners = async () => {
      try {

        const Designers = await getAllDesignerData()
        setDesignersData(Designers)

      } catch (error: any) {
        console.log(error);
      }
    }
    getDesigners()
  }, [])





  return (
    <div className='flex'>
     <div className="">
  <Home/>
</div>
<div className=" w-full ">


          <section className="pt-20 bg-blueGray-50">
            <div className='flex flex-wrap justify-center '>
          {
                    designersData?.map((designer: designerType, index) => {
                      return (
          <div className="w-full lg:w-4/12 px-12 ml-5">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-40">
              <div className="px-6">
                <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                  <div className="w-full px-4 flex justify-center">
                    <div className="flex justify-center">
                      
                      <img alt="..." src="/profileimage.jpg" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
  
                    </div>
                  </div>
              
                </div>
                <div className="text-center mt-16">
                  <h3 className="text-xl font-bold uppercase leading-normal text-blueGray-700 mb-2">
                   {designer?.name} 
                  </h3>
                  <div className="mb-2 text-blueGray-600 mt-10 ">
                    <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                    {designer?.email}
                  </div>
                  {/* <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {designer?.education.map((educationItem)=>educationItem.major)}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-address-book mr-2 text-lg text-blueGray-400"></i>
                    {designer?.experience} year experience
                  </div> */}
                 
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 font-normal text-pink-500 cursor-pointer" >
                    
                        <i className='fas fa-edit mr2 text-lg'></i>
                        View 
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          
          )
                    })
                  }
                  </div>
        </section>
        </div>
       
        </div>
        
        
  )
}

export default DesignersList
