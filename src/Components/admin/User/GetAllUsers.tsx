import React, { useState, useEffect } from 'react'
import { getAllUserData } from '../../../Services/client/userData'
import { UserType } from '../../../Models/Models'
import Home from '../Home/Home'
import { blockUser } from '../../../Services/admin/adminData'
import SearchBar from './SearchBar'

const GetAllUsers = () => {

  const [usersData, setUsersData] = useState<UserType[] | undefined>(undefined)
  const [searchResults,setSearchResults] = useState<UserType[]>([]);

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



  const userBlockingHandle = async (user: UserType) => {
    try {
      const userId = user._id;
      const action = user.isBlocked ? 'unblock' : 'block';

      try {
        const blockedUser = await blockUser(userId, action);
        if (blockedUser) {
          const updatedUsersData = usersData?.map((u) =>
            u._id === userId ? { ...u, isBlocked: !u.isBlocked } : u
          );
          setUsersData(updatedUsersData);
          return blockedUser;
        }
      } catch (error) {
        console.error(`Error ${action === 'block' ? 'blocking' : 'unblocking'} user with ID ${userId}:`, error);
        return null;
      }
    } catch (error) {
      console.error('Error handling blocking/unblocking:', error);
    }
  };

  const updateSearchResults = (results: UserType[]) => {
    setUsersData(results);
  };

  return (
    <div >
      <div className='mt-5 pr-40 pb-10'>
      <SearchBar updateSearchResults={updateSearchResults} />

      
      </div>
    
     <div className='flex'>
      <div className="ml-60 w-4/5 ">
        <div className="mx-auto max-w-screen-lg  sm:px-8">
          
          <div className="overflow-y-hidden rounded-lg border  ">
            <div className="overflow-x-auto ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#0F5762] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">ID</th>
                    <th className="px-1 py-3">Full Name</th>
                    <th className="px-1 py-3">Email</th>
                    <th className="px-2 py-3">Phone</th>
                    <th className="px-2 py-3">Status</th>

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
  <button
    className={`rounded-full ${user.isBlocked ? 'bg-red-300' :'bg-[#44a0ae]'} px-3 py-1 text-xs font-semibold ${user.isBlocked ? 'text-red-900' :'text-green-900' }`}
    onClick={() => userBlockingHandle(user)}
  >
    {user.isBlocked ? 'Block' : 'Unblock'}
  </button>
</td>
                        </tr>
                      )
                    })
                  }
                 
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

    </div>
  )
}

export default GetAllUsers