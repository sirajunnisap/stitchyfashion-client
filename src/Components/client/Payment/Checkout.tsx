import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courseType, designerType } from '../../../Models/Models';
import userAxios from '../../../Axios/userAxios';
import { designerById } from '../../../Services/designer/designerData';
import PaymentPage from '../../../Pages/client/PaymentPage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Payment from './Payment';

function Checkout() {

    const { id } = useParams()
    const [courseData, setCourseData] = useState<courseType | null>(null)
    const [designer,setDesigner] = useState<designerType|null>(null)
    
   
    

  const [isModalOpen,setIsModalOpen] = useState(false)
  const [showPaymentButton,setPaymentButton] = useState<boolean|null>(false)
  const initialOptions = {
    clientId: "AfxlLOag3yw7T8CcFSQyVUfLmlGbcw6S_tNDzDtzDPHYgJ1SSHu0cYXRPkhIe2f0UBNy6hPtdhthuzJv",
    currency: "USD",
    intent: "capture",
  };

    console.log(courseData, "courseData");
  
    useEffect(() => {
      const getCourse = async () => {
        const coursedetails = await userAxios(`/checkout/${id}`)
        console.log(coursedetails, "course detai using params id")
  
        const courseData = coursedetails.data
        setCourseData(courseData)


        const designerId = courseData.designer
        const designerDetails = await designerById(designerId)
        console.log(designerDetails,"designerdetaillllllllllllllllllllll");
        setDesigner(designerDetails)

        console.log(designer,"designer data in cours");
      }
      getCourse()
    }, [])

    function openModal (){
      setIsModalOpen(true)
    }
  
    function closeModal (){
      setIsModalOpen(false)
    }


    function PaymentButton (){
      setPaymentButton(true)
    }
    const paymentAmount = courseData?.courseFee
  
  //  setPaymentAmount(courseData?.courseFee)
  return (

   
       <div className='my-40  '>
                <div>
                    <h4 className='text-3xl font-bold mb-5 ml-48'>Checkout</h4>

                    <div className='mt-10 -ml-96 '>
          <div className=" md:flex-row md:space-x-5 space-y-3 md:space-y-0 max-w-xs md:max-w-3xl mx-auto" >
{/*            
             
              /> */}
            
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2">
              <div className="justify-between item-center mb-10 ">
              <img
                src={courseData?.image}
                alt=""
                className="w-full rounded-lg mb-3 h-60 object-cover"/>

              <p className=" text-gray-800 md:text-2xl text-2xl">
                {courseData?.title}
              </p>
              {/* <p className="md:text-sm text-gray-500 text-sm">
                {courseData?.description}
              </p> */}
              <p className="text-base font-normal text-gray-600">
                {courseData?.duration}{" "}
                {/* <span className="text-base font-normal text-gray-700">
                  <span> .</span> {courseData?.level}
                </span> */}
                {/* {courseData?.designer} */}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                ₹{courseData?.courseFee}
              </p>
              <ul className="mb-8 text-sm">
                    <li className="flex items-center leading-tight">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-black mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited access to this course
                    </li>
                    <li className="flex items-center leading-tight">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-black mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      30-day money-back guarantee
                    </li>
                   
                   
                  </ul>

            
            <hr/>

<p className="font-semibold text-gray-800 md:text-2xl text-2xl py-5">
Summary
</p>
<p className="text-base font-normal text-gray-600 pb-2">
Original Price : ₹{courseData?.courseFee}


</p>
<hr />
<p className="text-base font-normal text-gray-600 pt-2">
Total : ₹{courseData?.courseFee}


</p>
<button className='w-full py-3 mt-5 bg-teal-600 rounded-3xl'  onClick={PaymentButton}>
Complete Checkout
</button>

{showPaymentButton&& 

<div className="col-span-1 mt-4 p-5">
<PayPalScriptProvider options={initialOptions}>
<Payment
  selectedAmount={paymentAmount}
  // selectedDuration={selectedPayment}
  selectedCourseId={courseData?._id}
/>
</PayPalScriptProvider>
</div>
}

</div>
            </div>
          </div>
          
        </div>
             
                </div>
            </div>

           
 
  )
}

export default Checkout



       {/* <h1 className='text-xl text-teal-600 font-bold'><Link className='border-b-2  border-black pb-0 -mb-1' to={`/getDesignerById/${designerData?._id}`}>{designerData?.name}</Link></h1> */}
                    {/* <h6 className='text-base font-medium mt-3 text-gray-500'>dlkfsdfsdiferklefjoeifdslkf</h6>
                    <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                  <div className="">
                    <div className="">
                      
                      <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full mx-auto absolute -ml-24 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
  
                    </div>
                  </div>
              
                </div>

                    <h3 className='text-lg font-semibold mt-40'>About Me</h3>
                    <p className='mt-40 text-sm '>kdj;fadsf;djkdsalfks;dfjsdjf</p> */}