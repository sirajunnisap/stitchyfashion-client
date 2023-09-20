import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import { adminType } from '../../../Models/Models'
import { profile } from '../../../Services/admin/adminData'
import EditProfile from './EditProfile'

function AdminProfile() {
  const [adminData,setAdminData] = useState<adminType|undefined>()
  const [isModalOpen,setIsModalOpen] = useState(false)

  useEffect(() => {
    const adminProfile = async () => {
      try {
        const Admin = await profile();
        console.log(Admin, "adminData");
        setAdminData(Admin);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    }
    adminProfile();
  }, []);
  

  console.log(adminData?.email,"admin");

  function openModal(){
    setIsModalOpen(true)
  }
  function closeModal(){
    setIsModalOpen(false)
  }
  

  return (
    <>
    <div className={isModalOpen ? 'blur' : ''}>
    <div className='flex'>

        
       <div className=''>
      
       <section className="signUp ml-80">
  <div className="container_login" style={{ marginTop: "30px" }}>
    <div className="signUp-content">
    <div className="signUp-image">
        <figure>
          <img className='rounded-xl' src={adminData?.image} alt="profile image" />
        </figure>
      </div>
      <div className="signUp-form">
        <h2 className="form-title text-lavender">PROFILE</h2>
        <div className="form-group">
          <label htmlFor="name">
            <i className="zmdi zmdi-account material-icons-name"></i>
          </label>
          <p className="profile-field">Name :  { adminData?.name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            <i className="zmdi zmdi-account material-icons-name"></i>
          </label>
          <p className="profile-field">Email :  { adminData?.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="zmdi zmdi-email"></i>
          </label>
          <p className="profile-field">Phone :  { adminData?.phone}</p>
        </div>
        {/* <button data-modal-target="authentication-modal" onClick={toggleModal} data-modal-toggle="authentication-modal" className="block text-white bg-azelea hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */} <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
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
  
</section>
</div>
    </div>
    </div>
    <EditProfile isOpen={isModalOpen} closeModal={closeModal} setAdmin={setAdminData} adminData={adminData}/>
    </>
  )
}

export default AdminProfile
