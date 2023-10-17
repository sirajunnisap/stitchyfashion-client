import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userMoreInfo } from '../../../Services/client/userData';
import { paymentType } from '../../../Models/Models';

function UserMoreInfo() {
    const { id } = useParams();
    console.log(id, "idddddddddd");

    const [userPurchasedData, setUserPurchasedData] = useState<any | undefined>(undefined);
 const [totalAmount,setTotalAmount] = useState(0)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await userMoreInfo(id);
                console.log(userData, "userdata for more informationnnnnnnnnnn");
                setUserPurchasedData(userData);

                const amount = userData.reduce((total:any, courseItem:any) => total + parseInt(courseItem.amount, 10), 0);
                setTotalAmount(amount);
            } catch (error) {
                // Handle errors
            }
        };
        getUserData();
    }, [id]);

    console.log(totalAmount)
   
    return (
        <div className=' ml-80 mt-40'>
            <div className='flex'>
               <div className='w-1/3'>
               {userPurchasedData?.length > 0 && (
                        <div key={userPurchasedData[0].user?._id} >
                            <h1 className='text-4xl font-bold'>{userPurchasedData[0].user?.name}</h1>
                            <h6 className='text-base font-semibold mt-3'>{userPurchasedData[0].user?.email}</h6>
                            <div className="mt-10 sm:w-3/12 ">
                                <img
                                    src={userPurchasedData[0].user?.image ? userPurchasedData[0].user?.image : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"}
                                    alt="..."
                                    className="shadow rounded-full max-w-full h-auto align-middle border-none "
                                />
                            </div>
                        </div>
                    )}
                     <div>
                 
                      
                   
                          <div >
                            <h3 className=' text-base font-semibold mt-10'>Total Amount of User Purchased</h3> 
                           
                              <p className='mt-4 text-base font-black'>{totalAmount}</p>
                              <p className='mt-4 text-xl font-bold'></p> 
                             
                          </div>
                      
                
           
                   </div>
               </div>
                  

                   <div className='flex flex-wrap items-center justify-center   cursor-pointer mb-20'>
                  {userPurchasedData && userPurchasedData?.length > 0 ? (
                    userPurchasedData?.map((courseItem:any) => (
                      <div key={courseItem._id} className='flex flex-wrap items-center justify-center mt-4 mr-3 motion-safe:hover:scale-110 transition-[2s] '>
                        <div className="w-[200px] h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
                          <a href="#">
                            <img className="rounded-t-lg w-full h-[170px] object-cover" src={courseItem.selectedCourse.image} alt="" />
                          </a>
                          <div className="p-4 pt-2">
                            <a href="#">
                              <h2 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{courseItem.selectedCourse.title}</h2>
                            </a>
                            {/* <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">{courseItem.selectedCourse.description}</p> */}
                            <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Amount: {courseItem.amount}</p>
                            {/* Add more course details here */}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No purchased courses found.</p>
                  )}
                </div>
                   
            </div>
        </div>
    );
}

export default UserMoreInfo;
