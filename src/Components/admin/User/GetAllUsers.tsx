import React, { useState, useEffect } from 'react'
import { getAllUserData, userMoreInfo } from '../../../Services/client/userData'
import { UserType } from '../../../Models/Models'
import Home from '../Home/Home'
import { blockUser } from '../../../Services/admin/adminData'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";

const GetAllUsers = () => {

  const [usersData, setUsersData] = useState<UserType[] | undefined>(undefined)
  const [searchResults,setSearchResults] = useState<UserType[]>([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

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


  // console.log("users", usersData);


  const userBlockingHandle = async (user: UserType) => {
    try {
      const userId = user._id;
      const action = user.isBlocked ? 'unblock' : 'block';
  
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then(async (result) => { 
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          try {
            const blockedUser = await blockUser(userId, action);
            if (blockedUser) {
              const updatedUsersData = usersData?.map((u) =>
                u._id === userId ? { ...u, isBlocked: !u.isBlocked } : u
              );
              setUsersData(updatedUsersData);
            }
          } catch (error) {
            console.error(`Error ${action === 'block' ? 'blocking' : 'unblocking'} user with ID ${userId}:`, error);
          }
        }
      });
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
                    <th className="px-2 py-3">More Info</th>
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
                        
<td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
  <Link
    className='rounded-full px-6 py-1 text-xs font-semibold bg-[#3b929f] text-green-900'
 to={`/admin/getUserMoreInfo/${user?._id}`}
  >
    View
  </Link>
</td>
                        </tr>
                      )
                    })
                  }
                 
                </tbody>
           
              </table>
            </div>
          
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default GetAllUsers