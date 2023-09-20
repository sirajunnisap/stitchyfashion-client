import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { classes, courseType } from '../../../Models/Models'
import { addClass, courseDetails } from '../../../Services/Course/Coureses'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';

function AddClass() {
  const { id } = useParams()
  const [courseData, setCourseData] = useState<courseType | undefined>(undefined)
  const [d, setD] = useState(false)


  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [fileUrl, setUrl] = useState<string | null>(null)
  const [showButton, setShowButton] = useState(false)
  const [titleError, setTitleError] = useState<string | null>(null);
  const [desicriptionError, setDescriptionError] = useState<string | null>(null);
  const [videoError,setError] = useState<string|null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",

  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();


    if (formData.title.trim() === '') {
      setTitleError("Title cannot be empty or consist only of spaces.");
      return;
    }

    if (formData.title.length < 3) {
      setTitleError("Please enter a title with at least 3 characters.");
      return;
    }

    if (/^\s/.test(formData.title)) {
      setTitleError("Title cannot start with spaces.");
      return;
    }
    setTitleError(null);
    //description
    if (formData.description.trim() === '') {
      setDescriptionError("description cannot be empty or consist only of spaces.");
      return;
    }

    if (formData.description.length < 3) {
      setDescriptionError("Please enter a description with at least 3 characters.");
      return;
    }

    if (/^\s/.test(formData.description)) {
      setDescriptionError("description cannot start with spaces.");
      return;
    }
    setDescriptionError(null);
    const newClass: classes = {

      ...formData,
      video: fileUrl,
      _id: id
    };

    try {
      console.log(newClass, "body for add course");

      const response = await addClass(newClass);
      setCourseData(response)
      console.log('Course added successfully', response);

      // setResSuccess(response.data)
      // navigate('/listOfCourses');
      setResError(undefined)
      toast.success('🦄 class added successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } catch (error: any) {
      console.error('Error adding course:', error?.response?.data?.message);
      setResSuccess(undefined)
      setResError(error?.response?.data?.message)
      console.log(resError,"error from backend");
      
      toast.error('🦄 Course Already exist!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }



  const handleFileChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = e.target.files?.[0]

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file?.type)) {
      // setIsError(true);
      setError("Only JPEG, PNG, and GIF images are allowed.");
      return;
    }

    if (file) {
      generateUrl(file)
    } else {
      console.log("nulll");

    }
  })

  const generateUrl = async (file: File) => {

    try {
      console.log()
      const datas = new FormData()
      datas.append('file', file)
      datas.append('upload_preset', 'stitchy')
      datas.append('cloud_name', 'doottwqrx')
      console.log("hereeee????");


      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/doottwqrx/video/upload", datas
      )

      setUrl(data.url)
      setD(true)
      console.log("urls:", data);
      if (data.url) {
        setShowButton(true)
      }
      console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
      return data.url

    }
    catch (error) {
      console.log(error);

    }


  }
  console.log("urlllll", fileUrl);


  useEffect(() => {
    const getCourse = async () => {
      try {

        const Course = await courseDetails(id);
        if (Course) {
          const designerDetails = Course.designer

          console.log(designerDetails, "designer in coursedtails");

        }
        console.log(Course, "coursedetails");


        setCourseData(Course)

      } catch (error: any) {
        console.log(error);

      }
    }
    getCourse()

  }, [id])



  return (

    <div className='ml-40'>
      <div className='fixed z-30 ml-12 mt-3 rounded-2xl h-[250px] bg-[#22A78C] w-[1320px]'>
        <div>
          <h2 className="ml-36 text-3xl tracking-tight font-bold text-white dark:text-white pt-10">{courseData?.title}</h2>
          <p className="ml-36 mt-3 w-[730px] font-light text-white sm:text-lg dark:text-gray-400">{courseData?.description}</p>
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
      </div>

      <div className='flex'>

        <div className='ml-40 mt-20'>
          <div className='h-screen top-0 flex items-center justify-center '>
            {/* <section className='signUp '> */}
            <div className='container_login '>
              <div className='signUp-content'>
                <div className='signUp-form '>
                  <h2 className='form-title text-lavender'>Add Class</h2>



                  <div>
                    <form onSubmit={handleSubmit} className='register-form ' id='register-form'>

                      <div className=''>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='Title'
                            name='title'
                            value={formData.title}
                            onChange={handleInputChange}
                          />
                          {titleError && (
                            <p className="text-red-500 text-sm mt-1">{titleError}</p>
                          )}
                        </div>

                        <div className='form-group'>
                          <label htmlFor='description'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='description'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                          {desicriptionError && (
                            <p className="text-red-500 text-sm mt-1">{desicriptionError}</p>
                          )}
                        </div>



                        <div className='form-group'>
                          {fileUrl ? (
                            <div className='w-full h-96  p-10 bg-cover flex justify-end' >

                              <video className='mr-24' src={fileUrl}></video>


                            </div>

                          ) : (
                            <div className='w-full h-60 p-5 bg-white flex justify-center'>
                              <div>
                                <form>
                                  <div className='text-center'>
                                    <label>
                                      <input type="file" accept="video/*" name="video" className="hidden" multiple onChange={handleFileChange} />
                                      <div className="flex flex-auto ml-32 w-[280px] mx-auto -mt-10">
                                        <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="video" />
                                      </div>
                                      <p className="ml-44 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>

                                    </label>
                                  </div>
                                </form>
                              </div>

                            </div>
                          )
                          }

                        </div>
                        {videoError && (
                            <p className="text-red-500 text-sm mt-1">{videoError}</p>
                          )}


                      </div>



                      <div className='form-group form-button mt-5'>
                        <button
                          type='submit'
                          className='w-full text-white bg-[#22A78C] hover:bg-[#306c60] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                        >
                          SAVE
                        </button>
                      </div>
                    </form>
                    <ToastContainer />

                  </div>



                </div>

              </div>
            </div>
            {/* </section>
          {/* ... */}
          </div>
        </div>
      </div>
     




    </div>




  )
}

export default AddClass



