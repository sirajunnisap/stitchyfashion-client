import React,{useEffect, useState} from 'react'
import { UserType, courseType } from '../../../Models/Models'
import { getAllCourses } from '../../../Services/Course/Coureses'
import { getpaymenteUsers } from '../../../Services/Course/courseData'
import { Link } from 'react-router-dom'
function PaymentUser() {


    const [users,setUsers] = useState<any|null>(null)
   
   

    const [courseData, setCourseData] = useState<courseType[] | null>(null)
    const [pymtUser,setPymtUser] = useState<UserType[]|null>(null)
    const [selectedCourseId,setSelectedCourseId] =  useState<string|null>(null)
    const [countUsers,setCountUsers] = useState<any|null>(null)

    useEffect(() => {

        const getCourse = async () => {
            try {

                const Courses = await getAllCourses()
                
                setCourseData(Courses)

            } catch (error: any) {
                console.log(error);
            }
        }
        getCourse()
    }, [])

    const courseIdforUsers = (courseId:any)=>{
        console.log(courseId,"couseIdddddddddddddddd");
        
      setSelectedCourseId(courseId)

    }
console.log(selectedCourseId,"selected courseeid")
    useEffect(()=>{
        if (selectedCourseId !== null) {
        const getUsers = async()=>{
            try {

                console.log(selectedCourseId,"courseid for getuserssssssssssssssss");
                
                const Users = await getpaymenteUsers(selectedCourseId)
                console.log(Users.length,"userssssssssslengthhhhhhhhhhhhhh");
                
                console.log(Users,"userssssssss in getpaymented");
                setPymtUser(Users)
            } catch (error:any) {
                console.log(error);
            }
        }
        getUsers()
    
    }
    },[selectedCourseId])

    console.log(courseData,"course details for paymented users list")
  return (
    <div className='flex'>
     
<div className=" ml-60 w-4/5 pr-16">
<div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between pb-6">
   
    <div className="flex items-center justify-between">
      <div className="ml-10 space-x-8 lg:ml-40">
       
      </div>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto">
      <table className="w-full ">
        <thead>
          <tr className="bg-green-700 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">ID</th>
            <th className="px-1 py-3">Image</th>
            <th className="px-1 py-3">Course</th>
           
            <th className="px-1 py-3">CourseFee</th>
            <th className="px-1 py-3">Users</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
        {
                    courseData?.map((course: any, index:any) => {
                      return (
                        <tr>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p key={course._id} className="whitespace-no-wrap">{index + 1}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                          <img className="rounded-full h-[70px] object-cover" src={course.image} alt="" />
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                           <p className="whitespace-no-wrap">{course.title}</p>
                       
                          </td>
                       
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <p className="whitespace-no-wrap">{course.courseFee}</p>
                          </td>
                        
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
  <Link to={`/designer/paymentedUsersList/${course._id}`}
    className='rounded-full  px-3 py-1 text-xs font-semibold text-red-600'
    // onClick={() =>courseIdforUsers(course._id)}
  >
   users 
  </Link>
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
  )
}

export default PaymentUser
