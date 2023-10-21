import React, { useEffect, useState } from 'react'
import { PieChart,Cell, Pie, Tooltip,BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,Label} from 'recharts';
import { courseType, paymentType } from '../../../Models/Models';
import { getAllCourses, getPaymentedUsers } from '../../../Services/Course/Coureses';

function Dashboard() {

  const [paymentedUser, setPaymentedUser] = useState<paymentType[] | undefined>(undefined)
  const [courseData, setCourseData] = useState<courseType[] | undefined>(undefined)
const [totalrevenue,setTotal] = useState<any|undefined>(undefined)

  useEffect(()=>{
    const getCourses = async()=>{
      try {
        const course = await getAllCourses()
        setCourseData(course)
      } catch (error) {
        
      }
    }
    getCourses()
  },[])

  console.log(courseData,"courseDAdddddddddddd");
  
  
  useEffect(() => {

    const getUsers = async () => {
      try {

        const PaymentedUsers = await getPaymentedUsers()
  
        setPaymentedUser(PaymentedUsers)

      } catch (error: any) {
        console.log(error);
      }
    }
    getUsers()
  }, [])

  const allCoursesLength = courseData?.length
  const allpaymentedUsers = paymentedUser?.length
  const payment = paymentedUser
 
  useEffect(() => {
    if (payment) {
      const amounts = payment.map((item) => parseFloat(item.amount) || 0);
      console.log(amounts);
      
      setTotal(amounts);
    }
  }, [payment]);

  useEffect(() => {
    if (totalrevenue) {
      const totalSum = totalrevenue.reduce((sum:any,item:any)=>sum+item )

      console.log(totalSum,"toalrevenueeeeeeeee");

    }

     
  }, [totalrevenue]);
  




 console.log(totalrevenue,"totallllllrevenueeee");
 

    const data = [
      { name: 'Courses', value: allCoursesLength },
      { name: 'PaymentedUsers', value: allpaymentedUsers },
        // { name: 'PaymentedUsers', value: 1234567890 },
        // { name: 'Courses', value: 2345000 },
        // { name: 'Categories', value: 12300000 },
      ];
      
      const COLORS = ["#b46c88","#d98e9f","#ffb0b8","#6DA5C0","#00879b"];
      
      const dataCourse = [
        { name: 'Courses', value: allCoursesLength },
        { name: 'PaymentedUsers', value: allpaymentedUsers },
        // { name: 'PaymentedUsers', value: 1234567890 },
        // { name: 'Courses', value: 2345000 },
        // { name: 'Categories', value: 12300000 },
      ];
  return (
    <div className="p-4 ml-60 mt-10 ">
            <div className=" ">
                 <div className=" ">
                  <div className='flex gap-6'>
                  <div className="flex flex-row bg-[#0C7075] shadow-sm rounded-xl p-4 w-72 h-32 mb-5 ">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded bg-blue-100 text-blue-500">
              <svg className="w-6 h-6 text-gray-800 dark:text-offgreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
              </svg>
              </div> 
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm  font-bold text-grey">Courses</div>
                <div className="font-bold text-lg">{courseData?.length}</div>  
              </div>
            </div>
            <div className="flex flex-row bg-[#00879b] shadow-sm rounded-xl p-4 h-32 w-72  mb-5">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded bg-blue-100 text-blue-500">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm  font-bold text-grey">Users</div>
                {/* <div className="font-bold text-lg">{User?.length}</div> */}
              </div>
            </div>
            <div className="flex flex-row  bg-[#0f9690] shadow-sm rounded-xl p-4 h-32 w-72  mb-5">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded bg-blue-100 text-blue-500">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm  font-bold text-grey">Designers</div>
                {/* <div className="font-bold text-lg">{Designer?.length}</div> */}
              </div>
            </div>
            <div className="flex flex-row bg-[#6DA5C0]  shadow-sm rounded-xl p-4  w-72  h-32">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded bg-blue-100 text-blue-500">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
    <path d="M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
    <path d="M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/>
    <path d="M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
  </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm  font-bold text-grey">Paymented Users</div>
                <div className="font-bold text-lg">{paymentedUser?.length}</div>
              </div>
            </div>
                  </div>
            
          </div>
            </div>
<div className='flex gap-10 mt-20'>
< div className=' px- pt-20 pb-4 shadow-sm rounded-xl bg-gray-100 '>
<BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" barSize={35} >
          {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
          </Bar>
        </BarChart>

</div>
<div className='px-10 shadow-sm rounded-xl bg-gray-100 '>



<PieChart width={400} height={400}>
              <Pie
                data={dataCourse}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#0F5762"
                dataKey="value"
              >
                {dataCourse.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

   

</div>
</div>
{/* <div className='flex mr-10 mt-16'>
      <div className="w-full ">
        <div className="">
          
          <div className="overflow-y-hidden rounded-lg border  ">
            <div className="overflow-x-auto ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#0F5762] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">ID</th>
                    <th className="px-7 py-3">Full Name</th>
                    <th className="px-20 py-3">Email</th>
                    <th className="px-40 py-3">Course</th>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Designer</th>
                    <th className="px-5 py-3">Status</th>

                  </tr>
                </thead>


              
                <tbody className="text-gray-500">
                  {
                    paymentedUser?.map((paymented: paymentType, index) => {
                      return (
                        <tr>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-xs">
                            <p key={paymented._id} className="whitespace-no-wrap">{index + 1}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-xs">
                            <div className="flex items-center">
                            
                              <div className="ml-3">
                                <p className="whitespace-no-wrap">{paymented?.user?.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-xs">
                            <p className="whitespace-no-wrap">{paymented?.user?.email}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-xs">
                            <p className="whitespace-no-wrap">{paymented?.selectedCourse?.title}</p>
                          </td>
                          
                          <td className="border-b border-gray-200 bg-white px-1 py-5 text-xs">
                            <p className="whitespace-no-wrap">{paymented?.selectedCourse?.category?.name}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-xs">
                            <p className="whitespace-no-wrap">{paymented?.selectedCourse?.designer?.name}</p>
                          </td>
                        
<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
  <button
    className={`rounded-full ${paymented?.user?.isBlocked ? 'bg-red-300' :'bg-[#44a0ae]'} px-3 py-1 text-xs font-semibold ${paymented?.user?.isBlocked ? 'text-red-900' :'text-green-900' }`}
    onClick={() => userBlockingHandle(user)}
  >
    {paymented?.user?.isBlocked ? 'Block' : 'Unblock'} 
  </button>
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
      </div> */}


          
      
          </div>
          
  )
}

export default Dashboard
