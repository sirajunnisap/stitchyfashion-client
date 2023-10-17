import React, { useEffect, useState } from 'react'
import Home from '../Home'
import { useParams } from 'react-router-dom';
import { courseType, designerType } from '../../../Models/Models'
import { courseDetails, paymentedUser } from '../../../Services/Course/courseData';
import { Link } from 'react-router-dom';
import { designerById } from '../../../Services/designer/designerData';
import { UseAppSelector } from '../../../Redux/hooks';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Payment from '../Payment/Payment';
import Classcard from '../Cards/Classcard';
import DesignerDetails from '../Cards/DesignerDetails';

// import { IonIcon } from 'react-ionicons';

function CourseDetail() {
  const { id } = useParams()
  const [courseData, setCourseData] = useState<courseType | undefined>(undefined)
  const [designerData, setDesigner] = useState<designerType | undefined>(undefined)
  const [userPymnt, setUsrpymntd] = useState(undefined)

  const [showPaymentButton,setPaymentButton] = useState<boolean|null>(false)
  const initialOptions = {
    clientId: "ASeIAY3hnI0CYhc623hzS2x7e_-If6INzcndb7wO4PtZi2oeNNkoHwxua_5oBulS_1YoJZ26eC7csXNO",
    currency: "USD",
    intent: "capture",
  };


  const user = UseAppSelector(state => state.User)
  useEffect(() => {
    const getCourse = async () => {
      try {

        const Course = await courseDetails(id);



        if (Course) {
          const designerId = Course.designer

          console.log(designerId, "designer in coursedtails");

          // 

        }
        console.log(Course, "coursedetails");


        setCourseData(Course)


        const designerId = Course.designer
        const designerDetails = await designerById(designerId)
        console.log(designerDetails, "designerdetaillllllllllllllllllllll");
        setDesigner(designerDetails)


        const userPaymted = await paymentedUser(Course._id);
        setUsrpymntd(userPaymted)
      } catch (error: any) {
        console.log(error);

      }
    }
    getCourse()


  }, [id])
  console.log(designerData, "designerData in state");

  function PaymentButton (){
    setPaymentButton(true)
  }
  const paymentAmount = courseData?.courseFee

  const renderButton = () => {
    if (!user.accessToken) {
      return (
        <Link
          to={`/login`}
         
        ><button  className="w-full py-3 mt-5 text-base text-white font-semibold bg-teal-600 rounded-3xl">
Enroll Now
        </button>
          
        </Link>
      );
    }
  
    if (userPymnt) {
      return (
        <Link
          to={`/entrolledCourse/${courseData?._id}`}
        
        >
          <button   className="w-full py-3 mt-5 text-base text-white font-semibold bg-teal-600 rounded-3xl">
          Go to course
          </button>
         
        </Link>
      );
    }
  
    if (showPaymentButton) {
      return (
        <div className="px-7">
          <PayPalScriptProvider options={initialOptions}>
            <Payment
              selectedAmount={paymentAmount}
              selectedCourseId={courseData?._id}
            />
          </PayPalScriptProvider>
        </div>
      );
    }
  
    // return (
     
    // );
  };
  

  return (
    
    <div>
      <div className="w-1/5 pr-10">
        <Home />
      </div>
      <div className='w-full h-[360px] bg-[#07778B] '>

        <div>
          <h2 className="ml-36 text-3xl tracking-tight font-bold text-white dark:text-white pt-32">{courseData?.title}</h2>
          <p className="ml-36 mt-3 w-[730px] font-light text-white sm:text-lg dark:text-gray-400">{courseData?.description}</p>
          <p className='ml-36 text-sm m-5 text-white'>Created By <Link to={`/getDesignerById/${designerData?._id}`} className='text-black'>{designerData?.name}</Link> </p>
          <p className="ml-36 mb-1 text-sm font-normal text-white">
            {courseData?.duration}{" "}
            <span className=" text-sm font-normal text-white">
              <span> .</span> {courseData?.level}
            </span>
          </p>
          <p className="ml-36 text-sm font-semibold text-white">
            ₹{courseData?.courseFee}
          </p>
        </div>

        <div className='fixed w-[450px]  top-28 right-20 bg-white border rounded-lg p-4' >
         

          {/* <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
          </div> */}
       
          <img
                src={courseData?.image}
                alt=""
                className="w-full rounded-lg mb-3 h-56 object-cover"/>

             
<h3 className='text-xl font-bold'>{courseData?.title}</h3>

<div className='flex mt-3'>
<p className="mr-3 text-sm font-normal text-black">
            {courseData?.duration}{" "} 

          </p>
         
          <p className="  text-sm font-normal text-black">
            {courseData?.level} 
          </p>
</div>
           
             
              <p className="text-sm font-semibold py-2 text-gray-600">
                ₹{courseData?.courseFee}
              </p>
              <ul className="mb-8 text-sm">
                    <li className="flex items-center leading-tight">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-black mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited access to this course
                    </li>
                    {/* <li className="flex items-center leading-tight">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-black mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      30-day money-back guarantee
                    </li> */}
                   
                   
                  </ul>

            
            <hr/>



          
  {renderButton()?renderButton():( <button
         className="w-full py-3 mt-5 text-base text-white font-semibold bg-teal-600 rounded-3xl" // className='inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full'
        onClick={PaymentButton}
      >
        Enroll Now
      </button>)}


        </div>



      </div>
      <div className='m-24 mb-0'>
        <div className=' w-full mt-20 flex'>

          {/* <img className='border rounded-3xl' src="/cardImage1.jpg" alt="" /> */}

          <div className="ml-10 cursor-pointer">
            {courseData?.classes.map((classData) => (
< Classcard classData={classData} />
             
            ))}
          </div>

        </div>






      </div>


      <div className='my-40 ml-36'>
        <div className='w-[600px]'>
          {/* <h4 className='text-lg font-semibold mb-5'>Instructor</h4>
          <h1 className='text-xl text-teal-600 font-bold'><Link className='border-b-2  border-black pb-0 -mb-1' to={`/getDesignerById/${designerData?._id}`}>{designerData?.name}</Link></h1>
          <h6 className='text-base font-medium mt-3 text-gray-500'>{designerData?.field}</h6>
          <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="">
              <div className="">

                <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full mx-auto absolute -ml-24 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />

              </div>
            </div>

          </div>

         
          <p className='mt-40 text-sm '>{designerData?.aboutMe}</p> */}
          <DesignerDetails designerData={designerData}/>
        </div>
      </div>

    </div>
  )
}

export default CourseDetail

