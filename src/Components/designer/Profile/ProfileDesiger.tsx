import React ,{useEffect, useState}from 'react'
import Home from '../Home/Home'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import { designerType } from '../../../Models/Models'
import { profile, updateProfile } from '../../../Services/designer/designerData'
import EditProfile from './EditProfile'
import * as Yup from 'yup';



function DesignerProfile() {

  const [designer,setDesigner] = useState<designerType|undefined>()
  const [isModalOpen,setIsModalOpen] = useState(false)
  



  function openModal (){
    setIsModalOpen(true)
  }

  function closeModal (){
    setIsModalOpen(false)
  }
  


  useEffect(()=>{
    const DesignerProfile = async ()=>{

      const Designer = await profile()
      console.log(Designer,"designerData");
      
      setDesigner(Designer)

    }

    DesignerProfile()

  },[])

  
  console.log(designer?.name,"designerData");
  
  return (
    <>
    <div className={isModalOpen ? 'blur' : ''}>

    <div className='flex'>
      <div className='w-1/5'>
        <Home />
      </div>
      <div className='w-4/5 '>
      <section className="signUp ml-0">
  <div className="container_login" style={{ marginTop: "30px" }}>
    <div className="signUp-content">
    <div className="signUp-image">
        <figure>
          <img className='rounded-xl' src="https://i.pinimg.com/474x/a7/80/80/a7808059330f062de8a90e844d0558d1.jpg" alt="profile image" />
        </figure>
      </div>

      <div className="signUp-form">
        <h2 className="form-title text-lavender">PROFILE</h2>
        <div className="form-group">
          <label htmlFor="name">
            <i className="zmdi zmdi-account material-icons-name"></i>
          </label>
          <p className="profile-field">Name :  { designer?.name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            <i className="zmdi zmdi-account material-icons-name"></i>
          </label>
          <p className="profile-field">Email :  { designer?.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="zmdi zmdi-email"></i>
          </label>
          <p className="profile-field">Phone :  { designer?.phone}</p>
        </div>
        {/* <button data-modal-target="authentication-modal" onClick={toggleModal} data-modal-toggle="authentication-modal" className="block text-white bg-azelea hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */} 
        </div>
      </div>
      <div className="mx-28 text-center">
                <div className="flex flex-wrap justify-center">
                  <h1 className='text-2xl font-extrabold mb-7'>About Me</h1>
                  <p>
                    {/* {designer?.aboutMe} */}
                    My passion is to inspire and empower you to live your best version.  Using fashion as a vehicle to educate, inspire and transform your life -- ultimately, strive for excellence.

~~ A fashion industry expert --  from concept to completion: from Vision Boards to Pattern Drafting, to Tech Packs, to Social Media. 

~~ An FIT (Fashion Institute of Technology, NYC) graduate, and as a former Instructor and Curriculum Development Coordinator of the Fashion Design program at FIDM (Fashion Institute of Design & Merchandising, LA) all my fashion design skills and experience are put into practice and into my Courses. 

~~ As a Consultant for SAMSUNG C&T America, I have the opportunity to introduce new Brands to Samsung's infinite available resources to elevate Brands to global visibility.

~~ Born and raised in ROME (Italy), speaking Italian was an asset while working at RALPH LAUREN, when responsibilities included supervising samples manufactured in Italy.


                  </p>
                  </div>

                  </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4 font-normal text-pink-500 cursor-pointer"  onClick={
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
  
</section>
      
      </div>
    </div>
   </div>
    <EditProfile isOpen={isModalOpen} closeModal={closeModal} setDesigner={setDesigner} designerData={designer}/>
    </>
  )
}

export default DesignerProfile
