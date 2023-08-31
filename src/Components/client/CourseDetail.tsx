import React from 'react'
import Home from './Home'

function CourseDetail() {
  return (
    <div>
        <div className="w-1/5 pr-10">
                <Home />
            </div>
            <div className='m-24 mb-0'>
            <div className=' w-full mt-20 mr-14 flex'>
                <div className='w-1/2 m-36'>
                    <img className='border rounded-3xl' src="/cardImage1.jpg" alt="" />
                </div>
                <div className='ml-16 mb-4 mt-36 mr-32'>
                    <h2 className="ml-20 text-3xl tracking-tight font-bold text-[#07778B] dark:text-white">Fashion design !</h2>
                    <p className="my-10  font-light text-gray-500 sm:text-lg dark:text-gray-400">Fashion designers work in a variety of different ways when designing their pieces and accessories such as rings, bracelets, necklaces and earrings.</p>
                          <div className='flex flex-wrap '>

                          <p className='text-base m-5 text-teal-600'>Beginner level</p>
                    <p className='text-base m-5 text-teal-600'>duration : 1-6 Months</p>
                    <p className='text-base m-5 text-teal-600'>Course Fee : ₹6000</p>
                          </div>
                   
                    <div className="flex flex-wrap justify-center mt-10">

  <div className=" sm:w-3/12 ">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
  <p className='mt-14 ml-5 text-xl'>DesignerName</p>
</div>
<div className="flex flex-col mt-10 ml-24  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <a href="#" className="inline-flex items-center justify-center px-11 py-2 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                        Get started
                                    </a>
                                    {/* <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>   */}
                                </div>
                </div>

            </div>



            </div>
          
    </div>
  )
}

export default CourseDetail
