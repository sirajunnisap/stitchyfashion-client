import React, { useState, useEffect } from 'react'; // Removed unnecessary imports
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import './addCourse.css';
import { addCourse } from '../../../Services/Course/Coureses';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import designerAxios from '../../../Axios/designerAxios';
import { getAllCategory } from '../../../Services/Course/categories';
import { categoryType } from '../../../Models/Models';




function AddCourses() {
  const navigate = useNavigate();

  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [fileUrl, setUrl] = useState<string | null>(null)
  const [showButton, setShowButton] = useState(false)

  const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
  const [levelError, setLevelError] = useState<string | null>(null);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [desicriptionError, setDescriptionError] = useState<string | null>(null);
  const [durationError, setDurationError] = useState<string | null>(null);
  const [courseFeeError, setCourseFeeError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  useEffect(() => {

    const getCategory = async () => {
      try {

        const Category = await getAllCategory()
        setCategoryData(Category)

      } catch (error: any) {
        console.log(error);
      }
    }
    getCategory()
  }, [])

  console.log(categoryData, "cateogruiseoifwejt");


  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    category: "",
    level: "",
    courseFee: "",

  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [selectedCategory, setSelectCategory] = useState<string | undefined>(undefined);


  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryValue = e.target.value;
    setSelectCategory(selectedCategoryValue);
    setFormData((prevData) => ({ ...prevData, category: selectedCategoryValue }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!categoryData || categoryData.length === 0) {
      console.log("Category data is not available.");
      return;
    }

    if (!selectedCategory) {

      return;
    }
    //level
    if (formData.level !== 'beginner' && formData.level !== 'intermediate' && formData.level !== 'advance') {
      setLevelError("Please choose 'beginner,' 'intermediate,' or 'advance.'");
      return;
    }
    setLevelError(null);

    //title    
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
    if (/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(formData.description)) {
      setDescriptionError("invalid format");
      return;
    }
    setDescriptionError(null);
    //duratioin
    if (formData.duration.trim() === '') {
      setDurationError("duration cannot be empty or consist only of spaces.");
      return;
    }

    if (formData.duration.length < 3) {
      setDurationError("Please enter a duration with at least 3 characters.");
      return;
    }

    if (/^\s/.test(formData.duration)) {
      setDurationError("duration cannot start with spaces.");
      return;
    }
    setDurationError(null);
    //courseFee  
    if (formData.courseFee.trim() === '') {
      setCourseFeeError("courseFee cannot be empty or consist only of spaces.");
      return;
    }

    if (formData.courseFee.length < 3) {
      setCourseFeeError("Please enter a courseFee with at least 3 characters.");
      return;
    }

    if (/^\s/.test(formData.courseFee)) {
      setCourseFeeError("courseFee cannot start with spaces.");
      return;
    }
    setCourseFeeError(null);

    if (!fileUrl) {
      setImageError("Please select a image file.");
      return;
    }
  
    setImageError(null);

    const newCategory = {
      ...formData,
      category: selectedCategory,
      image: fileUrl,
    };

    try {

      console.log(newCategory, "body for add course");

      const response = await addCourse(newCategory);
      console.log('Course added successfully', response);
      console.log(response.data, "successmessage");

      setResSuccess(response.data)
      // navigate('/listOfCourses');
      setResError(undefined)
      toast.success('🦄 Course added successfully', {
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
  };


  const handleFileChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = e.target.files?.[0]

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file?.type)) {
      // setIsError(true);
      setImageError("Only JPEG, PNG, and GIF images are allowed.");
      return;
    }

    if (file) {
      generateUrl(file)
    } else {
      console.log("nulll");

    }
  })

  const generateUrl = async (img: File) => {

    try {
      console.log()
      const datas = new FormData()
      datas.append('file', img)
      datas.append('upload_preset', 'stitchy')
      datas.append('cloud_name', 'doottwqrx')
      console.log("hereeee????");


      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/doottwqrx/image/upload", datas
      )

      setUrl(data.url)

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



  return (
    <div className='flex'>

      <div className='ml-60'>
        <div className=' top-0 flex items-center justify-center'>
          <section className='signUp ml-40 mt-20'>
            <div className='container_login'>
              
                <div className='mx-20'>
                  <h2 className='form-title text-lavender'>Add Course</h2>


                  <div >
                    <form onSubmit={handleSubmit} >

                      <div className='w-full'>
                        <div className='w-full'>
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
                          <label htmlFor=''>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <select
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleCategoryChange}
                            className='mt-2 p-2 text-sm rounded-lg border w-full'

                          >
                            {/* Map the categoryData and create option elements */}
                            {categoryData?.map((category) => (
                              <option key={category._id} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='level(Beginner, Intermediate, Advance)'
                            name='level'
                            value={formData.level}
                            onChange={handleInputChange}
                          />
                          {levelError && (
                            <p className="text-red-500 text-sm mt-1">{levelError}</p>
                          )}
                        </div>
                        <div className='form-group'>
                          <label htmlFor='duration'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='duration'
                            name='duration'
                            value={formData.duration}
                            onChange={handleInputChange}
                          />
                          {durationError && (
                            <p className="text-red-500 text-sm mt-1">{durationError}</p>
                          )}
                        </div>
                        <div className='form-group'>
                          <label htmlFor='courseFee'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='number'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='courseFee'
                            name='courseFee'
                            value={formData.courseFee}
                            onChange={handleInputChange}
                          />
                          {courseFeeError && (
                            <p className="text-red-500 text-sm mt-1">{courseFeeError}</p>
                          )}
                        </div>
                        </div>
                       





<div>
<div className='form-group'>
                          {fileUrl ? (
                            <div className='w-full  p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl})` }}>
                              <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>

                              </div>

                            </div>
                          ) : (
                            <div className='w-full h-96 p-5  bg-white flex justify-end'>
                              <div>
                                <form>
                                  <div className='text-center'>
                                    <label>
                                      <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
                                      <div className="flex flex-auto ml-36 mx-auto -mt-10">
                                        <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image" />
                                      </div>
                                      <p className="ml-40 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>

                                      {/* <img  className='mt-0 px-28 ' src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="" /> */}
                                      {/* <FontAwesomeIcon className='ml-3 w-40 h-60 text-black' icon={faCamera} /> */}
                                    </label>
                                  </div>
                                </form>
                              </div>

                            </div>
                          )
                          }

                        </div>
                        {imageError && (
                            <p className="text-red-500 text-sm mt-1">{imageError}</p>
                          )}

                      </div>


</div>
                        
                     



                      <div className='form-group form-button mt-5'>
                        <button
                          type='submit'
                          className='w-full mb-8 text-white bg-[#0F5762] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                        >
                          SAVE
                        </button>
                      </div>
                    </form>
                    <ToastContainer />

                  </div>



                </div>

            </div>
          </section>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default AddCourses;

