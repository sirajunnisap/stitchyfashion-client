import React from 'react'
import GetAllUsers from '../User/GetAllUsers'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { toggleMenu } from '../Designer/cvFunctions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { UseAppSelector, useAppDispatch } from '../../../Redux/hooks';
import { logoutAdmin } from '../../../Redux/admin/adminSlice';
function AdminSidbar() {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const designer:any = UseAppSelector(state=>state.Admin)
  console.log(designer,"designer data in dashboard");
  const handleSignOut = () => {
    // ...
    dispatch(logoutAdmin({}))

    navigate('/admin/login');
  };
  
  return (
   
<div className='flex'>
  <div className='w-1/5 ml-5 mt-5 '>
  <div className="navigation active rounded-2xl">
    <div >
    
          {/* <span className="navHead"><i className=""></i></span> */}
          
          <p className="navHead  font-bold text-transparent text- bg-clip-text text-white">Admin</p>
          {/* <hr className="m-2 h-px my-8 bg-gray-100 border-0 dark:bg-gray-700"/> */}

    </div>
    
    <ul>
      <li>
        <Link to={"/admin/dashboard"}>
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <span className="title">Home</span>
        </Link>
      </li>
    
      <li>
        <Link to={"/admin/adminProfile"}>
          <span className="icon"><i className="fa-solid fa-user"></i></span>
          <span className="title">Profile</span>
        </Link>
      </li>
      <li>
        <Link to={"/admin/getUsers"}>
          <span className="icon"><i className="fa-solid fa-users"></i></span>
          <span className="title">Users</span>
        </Link>
      </li>
      <li>
        <Link to={"/admin/getDesigners"}>
          <span className="icon"><i className="fa-solid fa-chalkboard-teacher"></i></span>
          <span className="title">Designers</span>
        </Link>
      </li>
       <li>
        <Link to={"/admin/getCourses"}>
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Courses</span>
        </Link>
      </li>
      <li>
        <Link to={"/admin/addDesigner"}>
          <span className="icon"><i className="fa-solid fa-user-plus"></i></span>
          <span className="title">Add Designer</span>
        </Link>
      </li> 
      <li>
        <Link to={"/admin/addCategory"}>
          <span className="icon"><i className="fa-solid fa-user-plus"></i></span>
          <span className="title">Add Category</span>
        </Link>
      </li> 
      <li>
        <Link to={"/admin/listOfCategories"}>
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Categories</span>
        </Link>
      </li>
      <li>
        <Link to={''} onClick={handleSignOut}>
          <span className="icon"><i className="fa-solid fa-sign-out" aria-hidden="true"></i></span>
          <span className="title">SignOut</span>
        </Link>
      </li>
    </ul>
  </div>

  </div>
  
  <div className='w-4/5 '>


  </div>
  </div>
  )
}

export default AdminSidbar
