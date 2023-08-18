import React, { useState,useEffect } from 'react'
import { getAllUserData,userData } from '../../Services/client/userData'
import { UserType } from '../../Models/Models'

const GetAllUsers = ()=> {

  const [usersData,setUsersData] = useState<UserType[]|undefined>(undefined)
  
  useEffect(()=>{

    const getUsers = async()=>{
      try {
        
      const Users = await getAllUserData()
      setUsersData(Users)

      } catch (error:any) {
        console.log(error);
      }
    }
    getUsers()
  },[])


  console.log("users",usersData);
 
  

  return (
    <div>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
</div>

    </div>
  )
}

export default GetAllUsers