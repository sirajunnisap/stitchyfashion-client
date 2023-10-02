import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { classes, courseType } from '../../../Models/Models'
import { addClass, courseDetails } from '../../../Services/Course/Coureses'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'


function AddClass() {
  const { id } = useParams()
  const [courseData, setCourseData] = useState<courseType | undefined>(undefined)
  const [d, setD] = useState(false)
  const navigate = useNavigate()

  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [fileUrl, setUrl] = useState<string | null>(null)
  const [showButton, setShowButton] = useState(false)
  const [titleError, setTitleError] = useState<string | null>(null);
  const [desicriptionError, setDescriptionError] = useState<string | null>(null);
  const [videoError, setError] = useState<string | null>(null)

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
    if (/[^a-zA-Z0-9]/.test(formData.title)) {
      setDescriptionError("title can only contain letters and digits.");
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
    // if (/[^a-zA-Z0-9]/.test(formData.description)) {
    //   setDescriptionError("description can only contain letters and digits.");
    //   return;
    // }
    // setDescriptionError(null);

    if (!fileUrl) {
      setError("Please select a video file.");
      return;
    }

    setError(null);
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
      navigate(`/designer/courseDetails/${id}`);

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
      console.log(resError, "error from backend");

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
    const file: any = e.target.files?.[0]

    const allowedTypes = ["video/mp4", "video/x-msvideo", "video/quicktime", "video/x-ms-wmv", "video/x-matroska", "video/x-flv", "video/webm"];
    if (!allowedTypes.includes(file?.type)) {
      // setIsError(true);
      setError("Only mp4,webm videos are allowed.");
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

    <>













      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50'>
        <div className='bg-white rounded shadow-md '>
          <div className=''>
            <div className=' flex items-center justify-center '>
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

                                <video className='' src={fileUrl}></video>
                                <form>
                                  <div className='text-center relative'>
                                    <label className="cursor-pointer">
                                      <input type="file" accept="video/*" name="video" className="hidden" multiple onChange={handleFileChange} />
                                      {/* Use absolute positioning to center the camera icon inside the rounded div */}
                                      <div className="absolute pt-4 pl-4 inset-0 flex items-center justify-center">
                                        <FontAwesomeIcon className='text-black' icon={faCamera} />
                                      </div>
                                    </label>
                                  </div>
                                </form>

                              </div>

                            ) : (
                              <div className='w-full h-60 p-5 bg-white flex justify-center'>
                                <div>
                                  <form>
                                    <div className='text-center'>
                                      <label>
                                        <input type="file" accept="video/*" name="video" className="hidden" multiple onChange={handleFileChange} />
                                        <div className="flex flex-auto w-[280px] mx-auto -mt-10">
                                          <img className="has-mask ml-20 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="video" />
                                        </div>
                                        {/* <p className="ml-44 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p> */}

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


    </>




  )
}

export default AddClass



