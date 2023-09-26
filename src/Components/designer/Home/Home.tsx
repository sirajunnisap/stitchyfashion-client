import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './style.css'
// import { toggleMenu } from './cvFunctions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { UseAppSelector, useAppDispatch } from '../../../Redux/hooks';
import { logoutDesigner } from '../../../Redux/designer/designerSlice';

const NavBar = () => {
 
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const designer:any = UseAppSelector(state=>state.Designer)
  const handleSignOut = () => {
    // ...
    dispatch(logoutDesigner({}))

    navigate('/designer/login');
  };
  return (
   
<div className='flex'>
  <div className='w-1/5 '>
  <div className="navigation active ">
    <div >
    
          {/* <span className="navHead"><i className=""></i></span> */}
          
          <p className="navHead  font-bold text-transparent text- bg-clip-text text-white">Designer</p>
          {/* <hr className="m-2 h-px my-8 bg-gray-100 border-0 dark:bg-gray-700"/> */}

    </div>
    <ul>
      <li>
        <Link to={"/designer/dashboard"}>
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <span className="title">Home</span>
        </Link>
      </li>
    
      <li>
        <Link to={"/designer/profile"}>
          <span className="icon"><i className="fa-solid fa-user"></i></span>
          <span className="title">Profile</span>
        </Link>
      </li>
      <li>
        <Link to={"/designer/getPaymentedUsers"}>
          <span className="icon"><i className="fa-solid fa-users"></i></span>
          <span className="title">Users</span>
        </Link>
      </li>
      <li>
        <Link to={"/designer/categoryList"}>
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Categories</span>
        </Link>
      </li>
       <li>
        <Link to={"/designer/courseList"}>
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Courses</span>
        </Link>
      </li>
      <li>
        <Link to={'/designer/addCourse'}>
          <span className="icon"><i className="fa-solid fa-plus"></i></span>
          <span className="title">Add Course</span>
        </Link>
      </li> 
      <li>
        <Link to={""} onClick={handleSignOut}>
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

export default NavBar
