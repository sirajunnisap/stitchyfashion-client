import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, UseAppSelector } from '../../Redux/hooks';
import { logoutUser } from '../../Redux/client/userSlice';
import { Link } from 'react-router-dom';

import './style.css'
import { courseType } from '../../Models/Models';
import SearchBar from './SearchBar';


function NavBar() {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = UseAppSelector(state => state.User)

  console.log(user, "userDAta in home page");

  
  return (

    <div className=''>
      <nav className="fixed top-0 left-0 w-full bg-white  border-gray-200 px-4 lg:px-6 dark:bg-gray-800 z-50 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          <div className='w-36 p- '>
            <img src="/Stitchy.png" alt="" />
          </div>



          <div className="flex items-center lg:order-2 mr-10 md:mr-0 md:ml-48 lg:ml-0 lg:mr-24 ">  {user?.accessToken ? (
            <>
              <div
                className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                onClick={() => {
                  navigate('/profile');
                }}
              >
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <button
                className="ml-7 px-2 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                onClick={() => dispatch(logoutUser({}))}
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
          
          </div>


          <div className="fixed justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-[480px]">
            <ul className=" flex flex-col mt-4  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            
              <li className='lg:flex hidden'>
                <Link to={"/"} className="block py-6 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">HOME</Link>
              </li>
              <li className='lg:flex hidden'>
                <Link to={"/listOfCategories"} className="block py-2 pr-4 pl-3 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">CATEGORIES</Link>
              </li>
             
              <li className='lg:flex hidden'>
                <Link to={"/about"} className="block py-2 pr-4 pl-3 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">ABOUT</Link>
              </li>

            </ul>
          </div>
          <div>

            <div className='md:flex  hidden'>
              <SearchBar />


            </div>
          </div>


        </div>

      </nav>

    </div>
  );
}

export default NavBar;


