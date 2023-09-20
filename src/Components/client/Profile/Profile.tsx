import React, { useState, useEffect } from 'react'
import { profile } from '../../../Services/client/userData'
import LandingPage from '../Home'
import { UserType } from '../../../Models/Models'
import { Link } from 'react-router-dom'
import EditProfile from './EditProfile'
import FooterHome from '../FooterHome'
const Profile = () => {

  const [user, setUser] = useState<UserType|undefined>()
  const [isModalOpen,setIsModalOpen] = useState(false)
 
  useEffect(() => {
    const UserProfile = async () => {
     
        
          const User = await profile()
          console.log(User,"userData");
          
        setUser(User)
   
    }
    UserProfile()
  },[])
  
  function openModal (){
    setIsModalOpen(true)
  }

  function closeModal (){
    setIsModalOpen(false)
  }
  

  console.log(user?.name, "user");

  return (
    <>
    <div className={isModalOpen ? 'blur' : ''}>
      <div>
        <LandingPage />
      </div>
      <section className="pt-20 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-12 ml-28">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-40">
            <div className="px-6">
              <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div className="w-full px-4 flex justify-center">
                  <div className="flex justify-center">
                    <img alt="" src= {(user?.image)? user?.image : "	https://www.shareicon.net/data/128x128/2016/09/15/829452_user_512x512.png"} className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />

                  </div>
                </div>
                {/* {/* jnkloik * */}
              </div>
              <div className="text-center mt-16">
                <h3 className="text-xl font-bold uppercase leading-normal text-blueGray-700 mb-2">
                 {user?.name} 
                </h3>
                <div className="mb-2 text-blueGray-600 mt-10 ">
                  <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                  {user?.email}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-address-book mr-2 text-lg text-blueGray-400"></i>
                  {user?.phone}
                </div>
                {/* <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
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
    <EditProfile isOpen={isModalOpen}  closeModal={closeModal} setUser={setUser} userData={user} />
  </> 
  )
}

export default Profile



{/* <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div> */}

{/* <footer className="relative  pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
            </div>
          </div>
        </div>
      </div>
    </footer> */}