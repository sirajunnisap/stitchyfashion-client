import React, { useState, useEffect } from 'react'
import { getAllCategory } from '../../Services/Course/courseData'
import { categoryType } from '../../Models/Models'
import { Link} from 'react-router-dom'
import {  UseAppSelector } from '../../Redux/hooks';
import NavBar from './Home'
import Typewriter from 'typewriter-effect';
import Categorycard from './Cards/Categorycard'
import './userHome.css'
function UserHome() {
    const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)

    const user = UseAppSelector(state => state.User)
    useEffect(() => {

        const getCategory = async () => {
            try {

                const Category = await getAllCategory()
                setCategoryData(Category)

            } catch (error: any) {
                console.log(error);
            }
        }
        getCategory()
    }, [])

    return (
        <div className='min-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
            <div>
                <NavBar />
            </div>
            <div className='flex mt-14 mx-10'>
               
                <div className=' mt-20 lg:mt-20 sm:mt-0 w-1/2'>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="max-w-screen-md pl-10 sm:pl-0">
                                <h2 className="mb-4 sm:mb-3 text-4xl lg:text-4xl md:text-2xl sm:text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Let's find more that brings us together.
                                {/* <Typewriter 
  options={{
    strings: [` Let's find more that brings us together.`],
    autoStart: true,
    loop: true,
  }}
/> */}
                                   
                                    </h2>
                                <p className="mb-8 sm:mb-4 font-light text-gray-500 sm:text-xs lg:text-lg md:text-sm dark:text-gray-400">Whether you want to brush up on illustration skills, master sewing, learn the basics of running a fashion business or take a full eight-week course on fashion buying, there are a number of ways to do so without ever setting foot in a physical classroom. </p>
                                <div className="flex flex-col ml-40 lg:ml-40 md:ml-16 sm:ml-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">{user?.accessToken?(
                                    <Link to={'/listOfCategories'} className="inline-flex items-center justify-center px-14 sm:px-10 lg:px-14 lg:py-2.5 md:px-10 py-2.5 md:py-1 lg:text-base text-base md:text-sm font-medium text-center text-white bg-[#07778B] rounded-full">
                                    Get started
                                </Link>
                                ):(
                                    <Link to={'/login'} className="inline-flex items-center justify-center px-14 md:px-10 py-2.5 lg:px-14 lg:py-2.5 md:py-1 lg:text-base text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                        Get started
                                    </Link>
                                )}
                                    
                                    {/* <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>   */}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <div className='w-[50%] mt-20 sm:mt-15  mr-9 lg:mt-10 md:mt-20'>
                    <img className='sm:h-[200px] sm:w-[300px] lg:h-full lg:w-full ' src="https://img.freepik.com/free-vector/fashion-designers-creating-dress-pattern-making-dress-with-cloth-mannequin-fashion-design-beauty-designer-fashion-design-service-concept_335657-71.jpg?w=1060&t=st=1693234572~exp=1693235172~hmac=1ce3366a8978273ccd08ccfe6aff5560c310367e4dfd3a7cc020c6b488a50249" alt="" /></div>

            </div>

            <div className=' w-full mt-20 sm:mt-0 flex md:ml-16 sm:ml-5 md:mt-12 lg:mt-20'>
                <div className='w-[1600px] sm:w-[2000px]' >
                    <img src="https://img.freepik.com/premium-vector/fashion-designer-illustration-concept-white-background_701961-3410.jpg?w=2000" alt="" />
                </div>
                <div className='ml-2 lg:ml-0 sm:ml-3 mb-4 mt-14 sm:mt-1 sm:mb-0 mr-32 md:mt-1 lg:mt-16 md:mr-36'>
                    <h2 className=" text-3xl md:text-2xl lg:text-3xl sm:text-2xl lg:ml-48 mb-5 lg:mb-6 tracking-tight font-bold text-[#07778B] dark:text-white">Fashion design !</h2>
                    <p className="mt-10 sm:mt-2 lg:mx-16 font-light text-gray-500 md:text-sm sm:text-xs lg:text-lg dark:text-gray-400">Immerse yourself in the world of fashion design with our Stitch E-Learning Platform. From fundamental principles to advanced stitching techniques, our curated courses cater to your creative journey. Join us, connect with a community of learners, and start stitching your way to mastering fashion design today.</p>
                </div>
            </div>


            <div className='flex flex-col items-center'>
                <div className='sm:mt-10'>
                    <h2 className="mb-4 mt-20 sm:mb-3 sm:mt-10 text-4xl lg:text-4xl md:text-3xl sm:text-2xl tracking-tight font-extrabold md:font-bold text-[#07778B] dark:text-white relative">
                        Our Syllabus
                        {/* <span className="absolute bottom-0 left-1 transform  w-full h-0.5 bg-gray-400"></span> */}
                    </h2>
                </div>
                <div>
                    <p className='sm:text-sm'>"To cultivate exceptionally talented fashion designers through comprehensive <br />creative training and personalized mentorship."</p>
                </div>
                <div className='posters flex  items-center mt-10 sm:mt-0 md:mt-0 ml-10  motion-safe:hover:scale-105 transition-[2s]  cursor-pointer min-w-full ' style={{ maxWidth:'0px', overflowY: 'auto' }}>
                    {
                        categoryData?.slice(0, 6).map((category, index) => (
                                <Categorycard category={category}/>
                        ))}



                </div>


                <div className='flex flex-col items-center'>
                    <div className=''>
                        <h2 className="mb-4 sm:mb-5 sm:mt-5 md:mt-10 md:mb-0 sm:text-3xl lg:text-4xl text-4xl md:text-3xl tracking-tight font-extrabold md:font-bold text-[#07778B] dark:text-white">Features</h2>
                    </div>
                    <div className='flex flex-wrap items-center mt-10 sm:mt-2 md:mt-5 sm:ml-44 mr-28 md:ml-52 '>
                        
                        <div className="max-w-sm md:w-[340px] mr-7 sm:ml-7 sm:my-2 md:m-2  lg:mr-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  md:mr-0 mb-5" >
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px]  object-cover" src="https://static.vecteezy.com/system/resources/previews/001/214/758/non_2x/woman-connecting-with-friends-or-coworkers-at-video-conference-vector.jpg" alt="" />
                            </a>
                            <div className="p-4 md:p-2 pt-2 w-[300px]  h-[140px]  tracking-tight">
                                <a href="#">
                                    <h2 className="mb-1 text-lg md:pl-10 font-bold tracking-tight text-gray-900 dark:text-white">Video call</h2>
                                </a>
                                <p className="mb-1  text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div className="max-w-sm  md:w-[340px] m-7 sm:my-2 md:m-2  lg:m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 md:mr-0 mb-5" >
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px] pt-2  object-cover" src="https://cdni.iconscout.com/illustration/premium/thumb/students-watching-video-tutorials-4487979-3722667.png" alt="" />
                            </a>
                            {/* https://i.pinimg.com/736x/38/1e/b7/381eb7773f9e3b8ba0cb05bf35a4c756.jpg */}
                            <div className="p-4 md:p-2 pt-2 w-[300px]  h-[140px]  tracking-tight" >
                                <a href="#">
                                    <h2 className="mb-1 text-lg md:pl-10  font-bold tracking-tight text-gray-900 dark:text-white">Tutorials</h2>
                                </a>
                                <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div className="max-w-sm  md:w-[340px] m-7 sm:my-2 md:m-2 lg:m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 md:mr-0 mb-5 " >
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px]  object-cover" src="https://static.vecteezy.com/system/resources/previews/004/384/440/non_2x/people-organizing-their-tasks-and-appointments-scenes-with-efficient-and-effective-time-management-and-multitasking-at-work-flat-cartoon-illustration-free-vector.jpg" alt="" />
                            </a>
                            <div className="p-4 lg:p-4 md:p-2 pt-2  w-[300px]  h-[140px]   tracking-tight" >
                                <a href="#">
                                    <h2 className="mb-1 text-lg lg:text-lg md:pl-5 font-bold tracking-tight text-gray-900 dark:text-white">Chat message</h2>
                                </a>
                                <p className="mb-1  text-sm font-sans  text-gray-700 dark:text-gray-400" >Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



          




        </div>






    )
}

export default UserHome
