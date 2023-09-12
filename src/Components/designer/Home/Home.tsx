import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './style.css'
// import { toggleMenu } from './cvFunctions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { UseAppSelector, useAppDispatch } from '../../../Redux/hooks';
import { logoutDesigner } from '../../../Redux/designer/designerSlice';

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const designer:any = UseAppSelector(state=>state.Designer)
  console.log(designer,"designer data in dashboard");
  
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
        <a href="/designer/dashboard">
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <span className="title">Home</span>
        </a>
      </li>
    
      <li>
        <a href="/designer/profile">
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
        <a href="/designer/categoryList">
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Categories</span>
        </a>
      </li>
       <li>
        <a href="/designer/courseList">
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span className="title">Courses</span>
        </a>
      </li>
      <li>
        <Link to={'/designer/addCourse'}>
          <span className="icon"><i className="fa-solid fa-plus"></i></span>
          <span className="title">Add Course</span>
        </Link>
      </li> 
      <li> 
        <a href="#">
          <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
          <span className="title">SignOut</span>
        </a>
      </li>
      <div className="flex items-center lg:order-2 mr-5">  {designer?.accessToken ? (
          <>
            
            <button
              className="ml-7 px-2 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
              onClick={()=>dispatch(logoutDesigner({}))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                {/* ... SVG path data ... */}
                <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
              </svg>
            </button>
          </>
        ) : (
          <div>
            <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              <Link to={'/login'}>Login</Link>
            </button>
          </div>
        )}
                        {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</a> */}
                        {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button> */}
                        {/* <button onClick={()=> dispatch(logoutUser({}))}>Logout</button> */}
                    </div>
    </ul>
    
  </div>

  </div>
  
  <div className='w-4/5 '>


  </div>
  </div>
  )
}

export default Home
