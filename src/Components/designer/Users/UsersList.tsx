import React, { useEffect, useState } from 'react';
import { courseDetails, getpaymenteUsers } from '../../../Services/Course/courseData';
import { useParams } from 'react-router-dom';
import { UserType, courseType, paymentType } from '../../../Models/Models';
import { Link } from 'react-router-dom';

function UsersList() {
  const { id } = useParams();
  const [userData, setUserData] = useState<any[] | null>(null);
  const [course, setCourseData] = useState<courseType | null>(null)

  useEffect(() => {
    const courseDetailsInPymt = async () => {

      const courseData = await courseDetails(id)
      setCourseData(courseData)
      const paymentedUser = await getpaymenteUsers(id);
      setUserData(paymentedUser);
    };
    courseDetailsInPymt();
  }, []);

  console.log(course?.level);

  return (
    <div className='flex'>
      <div className='flex flex-wrap items-center mt-7 ml-60 '>

        <div key={course?._id} className='fixed right-10 top-28 flex flex-wrap items-center'>
          <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 w-[400px]">
            <a href="#">
              <img className="rounded-t-lg w-full h-[170px] object-cover" src={course?.image} alt="" />
            </a>
            <div className="p-4 pt-2 w-full h-full">
              <a href="#">
                <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{course?.title}</h2>
              </a>
              <p className="mb-1 text-sm font-sans text-gray-700 dark:text-gray-400">{course?.description}</p>
              <p className=" mb-1 text-sm font-sans text-gray-700 dark:text-gray-400">
                {course?.duration}{" "}
                <span className=" text-sm font-sans text-gray-700 dark:text-gray-400">
                  <span> .</span> {course?.level}
                </span>
              </p>
              <p className=" text-sm font-semibold font-sans text-gray-700 dark:text-gray-400">
                ₹{course?.courseFee}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className=" w-[850px] mr-96 mt-16 ">
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
                  <tr className="bg-[#0F5762] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">ID</th>
                    <th className="px-1 py-3">Image</th>
                    <th className="px-1 py-3">Name</th>
                    <th className="px-1 py-3">email</th>
                    <th className="px-1 py-3">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  {userData && userData.map((user: paymentType, index: any) => (
                    <tr>
                      <td className="border-b border-gray-200 bg-white pl-5 py-5 text-sm">
                        <p key={user._id} className="whitespace-no-wrap">{index + 1}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white py-5 text-sm">
                        <img className="rounded-full h-[60px] object-cover" src={user.user.image ? user.user.image : 'https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps='} alt="" />
                      </td>
                      <td className="border-b border-gray-200 bg-white py-5 text-sm">
                        <p className="whitespace-no-wrap">{user.user.name}</p>

                      </td>
                      <td className="border-b border-gray-200 bg-white py-5 text-sm">
                        <p className="whitespace-no-wrap">{user.user.email}</p> 
                      </td>

                      <td className="border-b border-gray-200 bg-white py-5 text-sm">
                        <p className="whitespace-no-wrap">{user.amount}</p>
                      </td>

                      <td>
                        <Link className=' bg-teal-600 rounded-xl px-10 py-2 ml-2  text-white font-bold' to={`/designer/chatWithUser/${user.user?._id}`}>Connect</Link>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
            {/* <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div className="mt-2 inline-flex sm:mt-0">
        <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersList;