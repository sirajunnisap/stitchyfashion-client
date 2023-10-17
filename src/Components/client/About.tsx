import React from 'react'

function About() {
    return (
        <div className=' m-20'>

            <div className='flex'>


                <div className='w-[50%]'>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                    About Us
                                </h2>
                                <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aspernatur, saepe enim dolore maiores pariatur deleniti totam sed corrupti neque impedit voluptas, veritatis incidunt, praesentium exercitationem.
                                </p>
                                <div className="flex flex-col  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <button className="inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                        Get started
                                    </button>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <div className='ml-20 mt-20'>
                    <img src="https://i.pinimg.com/564x/70/65/68/70656888745da6a176889470ad10704e.jpg" className='h-96 w-96' alt="" /></div>

            </div>

        </div>
    )
}

export default About
