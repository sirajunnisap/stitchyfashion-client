import React, { useState, useEffect } from 'react'
import { getAllUserData } from '../../Services/client/userData'
import { UserType } from '../../Models/Models'
import Home from './Home'

const GetAllUsers = () => {

  const [usersData, setUsersData] = useState<UserType[] | undefined>(undefined)

  useEffect(() => {

    const getUsers = async () => {
      try {

        const Users = await getAllUserData()
        setUsersData(Users)

      } catch (error: any) {
        console.log(error);
      }
    }
    getUsers()
  }, [])


  console.log("users", usersData);



  return (
    <div className='flex'>

      {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                   Delete
                </th>
            </tr>
        </thead>
        <tbody>
          
            
            {
              usersData?.map((elelement:UserType)=>{
                
                return(
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               
                <td className="px-6 py-4">
                  {elelement?.name}
                </td>
                <td className="px-6 py-4">
                    {elelement?.email}
                 
                </td>
                <td className="px-6 py-4">
                {elelement?.phone}
                
                </td>
                <td className="px-6 py-4">
                {elelement?.password}
               
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
                
            </tr>
                )
              })
            }
        </tbody>
    </table>
</div> */}
      <div className="w-1/5">
        <Home />
      </div>
      <div className="w-4/5 p-4">
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
          <div className="flex items-center justify-between pb-6">
            <div>
              <p className="font-bold text-[23px] text-teal-800">User Accounts</p>
              <span className="text-xs text-gray-500">View accounts of registered users</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="ml-10 space-x-8 lg:ml-40">
                {/* <button className="flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>

          Add User
        </button> */}
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#22A78C] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">ID</th>
                    <th className="px-1 py-3">Full Name</th>
                    <th className="px-1 py-3">Email</th>
                    <th className="px-1 py-3">Phone</th>
                    <th className="px-1 py-3">User Role</th>
                    <th className="px-1 py-3">Created at</th>
                    <th className="px-1 py-3">Status</th>

                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  {
                    usersData?.map((user: UserType, index) => {
                      return (
                        <tr>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p key={user._id} className="whitespace-no-wrap">{index + 1}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img className="h-full w-full rounded-full" src="/profileimage.jpg" alt="" />
                              </div>
                              <div className="ml-3">
                                <p className="whitespace-no-wrap">{user.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <p className="whitespace-no-wrap">{user.email}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <p className="whitespace-no-wrap">{user.phone}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <p className="whitespace-no-wrap">student</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <p className="whitespace-no-wrap">sep 25,2023</p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">UnBlock</span>
                          </td>
                        </tr>
                      )
                    })
                  }
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">3</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-full w-full rounded-full" src="/profileimage.jpg" alt="" />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">Besique Monroe</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                      <p className="whitespace-no-wrap">sdflk@gmail.com</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                      <p className="whitespace-no-wrap">1234567890</p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                      <p className="whitespace-no-wrap">Designer</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                      <p className="whitespace-no-wrap">Sep 28, 2022</p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                      <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">UnBlock</span>
                    </td>
                  </tr>
                  
                  
                 
                
                </tbody>
              </table>
            </div>
            <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
              <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
              <div className="mt-2 inline-flex sm:mt-0">
                <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
                <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default GetAllUsers