import React from 'react'

import { Link } from 'react-router-dom'
import './style.css'
// import { toggleMenu } from './cvFunctions';

import '@fortawesome/fontawesome-free/css/all.min.css';
function Home() {
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
      {/* <li>
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
      </li> */}
       <li>
        <a href="#">
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Courses</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon"><i className="fa-solid fa-plus"></i></span>
          <span className="title">Add Course</span>
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
