import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { paymentType } from "../../../Models/Models";
type Props = {
  courseData:paymentType|undefined
}
const SuccessPage:React.FC<Props> = ({courseData})=> {
  const [purshasedCourse,setPurchasedCourse] = useState<paymentType|null>(null)

  // console.log(courseData,"courseDAtaaaaaa in props ")
  // setPurchasedCourse(courseData?.selectedCourse?._id)


 const courseId = courseData?.selectedCourse?._id

 


  return (

    <div className='fixed top-10 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-xl'>
    <div className='bg-white rounded shadow-md  '>
    <div className="bg-gray-100 flex flex-col justify-center items-center w-[1000px] h-[450px] ">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="w-20 h-20 bg-green-400 rounded-full mx-auto mb-4 flex justify-center items-center"
        >
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M416 128L192 384L96 288"
              stroke="white"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <p className="text-3xl font-semibold mb-4">Payment Successful</p>
        <p className="text-gray-600 text-lg">
          Your payment has been successfully processed.
        </p>

        {/* Use the Link component to navigate back to the home page */}
        <Link to={`/entrolledCourse/${courseId}`}>
          <button className="bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4">
            Back to your course
          </button>
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
}

export default SuccessPage;