import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, UseAppSelector } from '../../Redux/hooks';
import { logoutUser } from '../../Redux/client/userSlice';
import { Link } from 'react-router-dom';
import LogoText from '../Logo/LogoText';
import './style.css'
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = UseAppSelector(state => state.User)
    
console.log(user,"userDAta in home page");


    return (
       
        <div className=''>
            <nav className="fixed top-0 left-0 w-full bg-white  border-gray-200 px-4 lg:px-6 dark:bg-gray-800 z-50">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                   
                        <div className='w-36 p- '>
                        <img src="/Stitchy.png" alt="" />
                            </div>   
                          
                   
                  
                    <div className="flex items-center lg:order-2 mr-5">  {user?.accessToken ? (
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
              onClick={()=>dispatch(logoutUser({}))}
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
                    
                    
                    <div className="fixed justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-[480px]">
                        <ul className=" flex flex-col mt-4  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                            </li> */}
                            <li>
                                <Link to={"/"} className="block py-6 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">HOME</Link>
                            </li>
                            <li>
                                <Link to={"/listOfCategories"} className="block py-2 pr-4 pl-3 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">CATEGORIES</Link>
                            </li>
                            {/* <li>
                            <Link to={"/listOfDesigners"} className="block py-2 pr-4 pl-3 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">DESIGNERS</Link>
                            </li> */}
                            <li>
                            <Link to={"/pricing"} className="block py-2 pr-4 pl-3 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">PRICING</Link>
                            </li>
                            <li>
                            <Link to={"/"} className="block py-2 pr-4 pl-3 text-[#07778B] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">ABOUT</Link>
                            </li>
                         
                        </ul>
                        </div>
                       <div>

                       <div className='ml-[700px]'>
      <div className="search">
  <form id="searchFormTop" action="" method="get">

    <input type="text" className="searchbox text-sm text-#07778B " name="q" id="q" placeholder="Search..."/>
    <span className="search-btn-wrap ">
    <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
      </span>
  </form>
</div>


      </div>
                       </div>
                   
                   
                </div>
                 
            </nav>
       
        </div>
    );
}

export default NavBar;




// HomePage

// Header

// Search

// Top trending courses

// course 1



// course container

// api -> [{},{}].map(<>)


 // <nav className="w-full p-6 pr-6 fixed top-0 border-b border-gray-200 bg-white">
        //   <div className="container mx-auto px-3  lg:px-10">
        //     <div className="flex items-center justify-between">

        //         <div className="flex items-center flex-shrink-0 text-black mr-6">
        //           {/* Insert logo or branding here */}
        //         </div>
        //         <div className="block lg:hidden">
        //           <button
        //             onClick={() => setIsOpen(!isOpen)}
        //             className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        //           >
        //             <svg
        //               className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
        //               viewBox="0 0 20 20"
        //               xmlns="http://www.w3.org/2000/svg"
        //             >
        //               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        //             </svg>
        //             <svg
        //               className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
        //               viewBox="0 0 20 20"
        //               xmlns="http://www.w3.org/2000/svg"
        //             >
        //               <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        //             </svg>
        //           </button>
        //         </div>
        //         <div
        //           className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
        //             isOpen ? 'block' : 'hidden'
        //           }`}
        //         >
        //           <div className="flex gap-[5%] item-center justify-center text-lg lg:flex-grow">
        //             <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4">
        //               Home
        //             </a>
        //             <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4">
        //               Courses
        //             </a>
        //             <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4">
        //               Designers
        //             </a>
        //             <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4">
        //               About
        //             </a>
        //           </div>
        //           <div>
        //           {
        //             user?.accessToken ?(
        //               <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" onClick={()=>{
        //                 // dispatch(logoutUser({}))
        //                 // navigate('/login')
        //                 navigate('/profile')
        //               }}>
        //               <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        //               </div>
        //             ):(<div>
        //               <button><Link to ={'/login'}>Login</Link></button>
        //             </div>)
        //           }

        //           </div>

        //           <div >
        //             <button className="inline-flex items-center bg-teal-600 border-0 rounded-full py-2 px-10 text-white">
        //               Get Started

        //             </button>
        //           </div>


        //         </div>
        //       </div>
        //     </div>

        // </nav>



