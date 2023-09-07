import React ,{useEffect, useState}from 'react'
import Home from '../Home/Home'
import { designerType } from '../../../Models/Models'
import { profile } from '../../../Services/designer/designerData'
import EditProfile from './EditProfile'

function DesignerProfile() {

  const [designer,setDesigner] = useState<designerType|undefined>()
  const [isModalOpen,setIsModalOpen] = useState(false)

  useEffect(()=>{
    const DesignerProfile = async ()=>{

      const Designer = await profile()
      console.log(Designer,"designerData");
      
      setDesigner(Designer)

    }

    DesignerProfile()

  },[])

  function openModal(){
    setIsModalOpen(true)
  }
  function closeModal(){
    setIsModalOpen(false)
  }

  console.log(designer?.name,"designerData");
  
  return (
    <>
    <div className={isModalOpen ? 'blur' : ''}>
    <div className='flex'>
      <div className='w-1/5'>
        <Home />
      </div>
      <div className='w-4/5 '>
      <section className="pt-20 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-12 ml-28">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-40">
            <div className="px-6">
              <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div className="w-full px-4 flex justify-center">
                  <div className="flex justify-center">
                    <img alt="..." src="/profileimage.jpg" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />

                  </div>
                </div>
                {/* {/* jnkloik * */}
              </div>
              <div className="text-center mt-16">
                <h3 className="text-xl font-bold uppercase leading-normal text-blueGray-700 mb-2">
                  {designer?.name}
                </h3>
                <div className="mb-2 text-blueGray-600 mt-10 ">
                <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                  {designer?.email}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-address-book mr-2 text-lg text-blueGray-400"></i>
                  {designer?.phone}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
  {designer?.education.map((edu, index) => (
    <div key={index}>
      {edu.university}, {edu.major},
    </div>
  ))}
</div>
<div className="mb-2 text-blueGray-600 mt-10">
  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
  {designer?.experience}
</div>
<div className="mb-2 text-blueGray-600 mt-10">
  <i className="fas fa-cogs mr-2 text-lg text-blueGray-400"></i>
  {designer?.skill}
</div>
                {/* <div className="mb-2 text-blueGray-600 mt-10">
                  
                  {designer?.}
                </div> */}
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4 font-normal text-pink-500 cursor-pointer" onClick={
                    openModal
                  }>
                  
                    {/* <Link to={`/updateProfile`} className="font-normal text-pink-500"> */}
                      <i className='fas fa-edit mr2 text-lg'></i>
                      Edit Profile
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* jjjkk */}
      </section>
      </div>
    </div>
    </div>
    <EditProfile isOpen={isModalOpen} closeModal={closeModal} setDesigner={setDesigner} designerData={designer}/>
    </>
  )
}

export default DesignerProfile
