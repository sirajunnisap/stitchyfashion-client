import React, { useState, useEffect } from 'react'
import LandingPage from './Home'
import FooterHome from './FooterHome'
import { getAllCategory } from '../../Services/Course/courseData'
import { categoryType } from '../../Models/Models'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, UseAppSelector } from '../../Redux/hooks';
import NavBar from './Home'
import Typewriter from 'typewriter-effect';
import Categorycard from './Cards/Categorycard'
import { Container } from 'react-bootstrap/lib/Tab'
import './userHome.css'
function UserHome() {
    const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
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
        <div className='min-w-full container '>
            <div>
                <NavBar />
            </div>
            <div className='flex mt-14 mx-10'>
               
                <div className=' mt-20 w-1/2'>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                <Typewriter 
  options={{
    strings: [` Let's find more that brings us together.`],
    autoStart: true,
    loop: true,
  }}
/>
                                   
                                    </h2>
                                <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Whether you want to brush up on illustration skills, master sewing, learn the basics of running a fashion business or take a full eight-week course on fashion buying, there are a number of ways to do so without ever setting foot in a physical classroom. </p>
                                <div className="flex flex-col  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">{user?.accessToken?(
                                    <Link to={'/listOfCategories'} className="inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                    Get started
                                </Link>
                                ):(
                                    <Link to={'/login'} className="inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
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

                <div className='w-[50%] mt-20 mr-9'>
                    <img src="https://img.freepik.com/free-vector/fashion-designers-creating-dress-pattern-making-dress-with-cloth-mannequin-fashion-design-beauty-designer-fashion-design-service-concept_335657-71.jpg?w=1060&t=st=1693234572~exp=1693235172~hmac=1ce3366a8978273ccd08ccfe6aff5560c310367e4dfd3a7cc020c6b488a50249" alt="" /></div>

            </div>

            <div className=' w-full mt-20 mr-14 flex'>
                <div className='w-1/2'>
                    <img src="https://img.freepik.com/premium-vector/fashion-designer-illustration-concept-white-background_701961-3410.jpg?w=2000" alt="" />
                </div>
                <div className='ml-10 mb-4 mt-14 mr-32'>
                    <h2 className=" text-3xl tracking-tight font-bold text-[#07778B] dark:text-white">Fashion design !</h2>
                    <p className="mt-10 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. .</p>
                </div>
            </div>


            <div className='flex flex-col items-center'>
                <div className=''>
                    <h2 className="mb-4 mt-20 text-4xl tracking-tight font-extrabold text-[#07778B] dark:text-white relative">
                        Our Syllabus
                        {/* <span className="absolute bottom-0 left-1 transform  w-full h-0.5 bg-gray-400"></span> */}
                    </h2>
                </div>
                <div>
                    <p>"To cultivate exceptionally talented fashion designers through comprehensive <br />creative training and personalized mentorship."</p>
                </div>
                <div className='posters flex  items-center mt-10  motion-safe:hover:scale-105 transition-[2s]  cursor-pointer' style={{ maxWidth:'1400px', overflowY: 'auto' }}>
                    {
                        categoryData?.slice(0, 6).map((category, index) => (
                                <Categorycard category={category}/>
                        ))}



                </div>


                <div className='flex flex-col items-center'>
                    <div className=''>
                        <h2 className="mb-4 mt-20 text-4xl tracking-tight font-extrabold text-[#07778B] dark:text-white">Features</h2>
                    </div>
                    <div className='flex flex-wrap items-center mt-10'>
                        <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 mb-5">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px] object-cover" src="https://cdni.iconscout.com/illustration/premium/thumb/students-watching-video-tutorials-4487979-3722667.png" alt="" />
                            </a>
                            {/* https://i.pinimg.com/736x/38/1e/b7/381eb7773f9e3b8ba0cb05bf35a4c756.jpg */}
                            <div className="p-4 pt-2 w-[300px] h-[140px]">
                                <a href="#">
                                    <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Tutorials</h2>
                                </a>
                                <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 mb-5">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px] object-cover" src="https://static.vecteezy.com/system/resources/previews/001/214/758/non_2x/woman-connecting-with-friends-or-coworkers-at-video-conference-vector.jpg" alt="" />
                            </a>
                            <div className="p-4 pt-2 w-[300px] h-[140px]">
                                <a href="#">
                                    <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Video call</h2>
                                </a>
                                <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 mb-5">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px] object-cover" src="https://static.vecteezy.com/system/resources/previews/004/384/440/non_2x/people-organizing-their-tasks-and-appointments-scenes-with-efficient-and-effective-time-management-and-multitasking-at-work-flat-cartoon-illustration-free-vector.jpg" alt="" />
                            </a>
                            <div className="p-4 pt-2 w-[300px] h-[140px]">
                                <a href="#">
                                    <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Chat message</h2>
                                </a>
                                <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='flex mt-14 m-44'>
                <div className='w-[50%] mt-20  m-16 '>
                    <img src="/formdesigner.jpg" alt="" /></div>

                <div className=' mt-20 ml- w-1/2 '>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="max-w-screen-md">
                                <h2 className="mb-4 ml-28 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">JOIN TO US</h2>
                                <p className="mb-8 font-light text-gray-500 sm:text-base dark:text-gray-400">STUDY FROM ANYWHERE EITHER WHILE YOU ARE USING YOUR MOBILE PHONE OR DESKTOP OR YOUR
                                    LAPTOP  WATCH LESSONS AND CHAT WITH YOUR TUTOR OR MAKE VIDEOCALLS SCHEDULE YOUR TIME
                                    AND FIND THE BEST TUTOR FROM THE WEBSITE AND MAKE A GOOD CAREER AND TEACH YOUR SKILLS
                                    TO OTHERS SPEARD EDUCATION AND SKILLS EVERYWHERE AROUND WORLD </p>
                                <div className="flex flex-col ml-28  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <a href="#" className="inline-flex items-center justify-center px-16 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                        JOIN
                                    </a>
                                    <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>  
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


            </div> */}






          




        </div>






    )
}

export default UserHome
