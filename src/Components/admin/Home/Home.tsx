import React from 'react'
import GetAllUsers from '../User/GetAllUsers'
import { Link } from 'react-router-dom'
import './style.css'
import { toggleMenu } from '../Designer/cvFunctions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { UseAppSelector } from '../../../Redux/hooks';
function Home() {

  const admin = UseAppSelector(state=>state.Admin)
  console.log(admin,"admindata in dashboard");
  
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
        <a href="/admin/dashboard">
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <span className="title">Home</span>
        </a>
      </li>
    
      <li>
        <a href="/admin/adminProfile">
          <span className="icon"><i className="fa-solid fa-user"></i></span>
          <span className="title">Profile</span>
        </a>
      </li>
      <li>
        <a href="/admin/getUsers">
          <span className="icon"><i className="fa-solid fa-users"></i></span>
          <span className="title">Users</span>
        </a>
      </li>
      <li>
        <a href="/admin/getDesigners">
          <span className="icon"><i className="fa-solid fa-chalkboard-teacher"></i></span>
          <span className="title">Designers</span>
        </a>
      </li>
       <li>
        <a href="#">
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Courses</span>
        </a>
      </li>
      <li>
        <a href="/admin/addDesigner">
          <span className="icon"><i className="fa-solid fa-user-plus"></i></span>
          <span className="title">Add Designer</span>
        </a>
      </li> 
      <li>
        <a href="/admin/addCategory">
          <span className="icon"><i className="fa-solid fa-user-plus"></i></span>
          <span className="title">Add Category</span>
        </a>
      </li> 
      <li>
        <a href="/admin/listOfCategories">
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Categories</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
          <span className="title">SignOut</span>
        </a>
      </li>
    </ul>
  </div>

  </div>
  
  <div className='w-4/5 '>


  </div>
  </div>
  )
}

export default Home
