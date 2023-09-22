import React,{useEffect, useState} from 'react'
import Home from '../Home'
import { useParams } from 'react-router-dom';
import { courseType, designerType } from '../../../Models/Models'
import { courseDetails } from '../../../Services/Course/courseData';
import { Link } from 'react-router-dom';
import { designerById } from '../../../Services/designer/designerData';
import { UseAppSelector } from '../../../Redux/hooks';

// import { IonIcon } from 'react-ionicons';

function CourseDetail() {
  const {id} = useParams()
  const [courseData,setCourseData] = useState<courseType | undefined>(undefined)
  const [designerData,setDesigner]=useState<designerType|undefined>(undefined)

  const user = UseAppSelector(state=>state.User)
  useEffect(()=>{
    const getCourse = async()=>{
      try {
        
        const Course = await courseDetails(id);

    if(Course){
      const designerId = Course.designer
      
      console.log(designerId,"designer in coursedtails");

      // 
      
    }
        console.log(Course,"coursedetails");
        
       
        setCourseData(Course)


       const designerId = Course.designer
       const designerDetails = await designerById(designerId)
       console.log(designerDetails,"designerdetaillllllllllllllllllllll");
       setDesigner(designerDetails)

      } catch (error:any) {
        console.log(error);
        
      }
    }
    getCourse()
    
   
  },[id])
console.log(designerData,"designerData in state");


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
            
                  <div className='fixed w-[450px]  top-28 right-20 bg-white border rounded-lg p-10 pt ' >
                            <h3 className='text-xl font-bold'>{courseData?.title}</h3>
                            
<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
</div>
<p className=" mb-1 mt-5 text-sm font-normal text-black">
                {courseData?.duration}{" "}
                
                </p>
                <p className=" mb-4 text-sm font-normal text-black">
                 {courseData?.level}
                </p>

                <div className="flex flex-col ml-20 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">{user?.accessToken?(
                                    <Link to={`/pricing/${courseData?._id}`} className="inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                    Entroll Now
                                </Link>
                                ):(
                                    <Link to={'/login'} className="inline-flex items-center justify-center px-14 py-2.5 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                        Entroll Now
                                    </Link>
                                )}
                                    
                                    {/* <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>   */}
                                </div>
                  </div>

            </div>
            <div className='m-24 mb-0'>
            <div className=' w-full mt-20 flex'>
                
                    {/* <img className='border rounded-3xl' src="/cardImage1.jpg" alt="" /> */}
                    
                    <div className="ml-10">
      {courseData?.classes.map((classData) => (
        <div className="flex flex-col justify-center  mb-4">
          <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white ">
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
            {classData.video && <video src={classData.video} className="rounded-xl" controls controlsList='nodownload' />}
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
              <div className="flex justify-between item-center"></div>

              <h3 className="font-black text-gray-800 md:text-lg text-lg">
                {classData.title}
              </h3>
              <p className="md:text-sm text-gray-500 text-sm">
                {classData.description}
              </p>
              {/* <p className="text-xs font-normal text-gray-600">
                {classData.duration}{" "}
                <span className="text-xs font-normal text-gray-700">
                  <span> .</span> {classData.level}
                </span>
              </p>
              <p className="text-sm font-semibold text-gray-600">
                ₹{classData.courseFee}
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
     
                </div>
               

     



            </div>
            
           
            <div className='my-40 ml-36'>
                <div className='w-[600px]'>
                    <h4 className='text-lg font-semibold mb-5'>Instructor</h4>
                    <h1 className='text-xl text-teal-600 font-bold'><Link className='border-b-2  border-black pb-0 -mb-1' to={`/getDesignerById/${designerData?._id}`}>{designerData?.name}</Link></h1>
                    <h6 className='text-base font-medium mt-3 text-gray-500'>{designerData?.field}</h6>
                    <div className=" relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                  <div className="">
                    <div className="">
                      
                      <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full mx-auto absolute -ml-24 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
  
                    </div>
                  </div>
              
                </div>

                    {/* <h3 className='text-lg font-semibold mt-40'>About Me</h3> */}
                    <p className='mt-40 text-sm '>{designerData?.aboutMe}</p>
                </div>
            </div>
           
    </div>
  )
}

export default CourseDetail


// <div className="flex flex-col gap-3 mt-14 w-[50px]">
// <div className="flex flex-col gap-4 bg-gray-700 p-4">
    
//     <div className="flex justify justify-between">
//         <div className="flex gap-2">
//             <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
//             <span>Jess Hopkins</span>
//         </div>
//         <div className="flex p-1 gap-1 text-orange-300">
//         <IonIcon icon={star} />
// <IonIcon icon={star} />
// <IonIcon icon={star} />
// <IonIcon icon={star} />
// <IonIcon icon={starHalf} />
// </div>
//     </div>

//     <div>
//         Gorgeous design! Even more responsive than the previous version. A pleasure to use!
//     </div>

//     <div className="flex justify-between">
//         <span>Feb 13, 2021</span>
//         <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
//             <ion-icon name="share-outline"></ion-icon> Share</button>
//     </div>
// </div>

// </div>
{/* <div className="flex flex-col mt-10 ml-24  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <a href="#" className="inline-flex items-center justify-center px-11 py-2 text-base font-medium text-center text-white bg-[#07778B] rounded-full">
                                        Get started
                                    </a>
                                    <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>  
                                </div>
                                <div className="flex flex-wrap justify-center mt-10">

  <div className=" sm:w-3/12 ">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
  <p className='mt-14 ml-5 text-xl'></p>
</div>
 <div className='ml-16 mb-4 mt-36 mr-32'>
                    <h2 className="ml-20 text-3xl tracking-tight font-bold text-[#07778B] dark:text-white">{courseData?.title}</h2>
                    <p className="my-10  font-light text-gray-500 sm:text-lg dark:text-gray-400">{courseData?.description}</p>
                    Fashion designers work in a variety of different ways when designing their pieces and accessories such as rings, bracelets, necklaces and earrings
                          <div className='flex flex-wrap '>

                          <p className='text-base m-5 text-teal-600'>{courseData?.level} level</p>
                    
                    <p className='text-base m-5 text-teal-600'>Course Fee : ₹{courseData?.courseFee}</p>
                    
                          </div>
                        
                          
                  
                </div>
 */}