import React,{useState,useEffect} from 'react'; // Removed unnecessary imports
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import './addCourse.css';
import { addCourse } from '../../../Services/designer/Coureses';
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import designerAxios from '../../../Axios/designerAxios';
import { getAllCategory } from '../../../Services/designer/categories';
import { categoryType } from '../../../Models/Models';




function AddCourses() {
  const navigate = useNavigate();

  const [respSuccess, setResSuccess] = useState<string | undefined>(undefined);
  const [resError, setResError] = useState<string | undefined>(undefined);
  const [fileUrl,setUrl]=useState<string|null>(null)
  const [showButton,setShowButton]=useState(false)

  const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)

  
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
  
  console.log(categoryData,"cateogruiseoifwejt");
  

  const [formData,setFormData] = useState({
    title:"",
    description:"",
    duration:"",
    category:"",
    level:"",
    courseFee:"",

  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [selectedCategory,setSelectCategory] = useState<string|undefined>(undefined);

 
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryValue= e.target.value;
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
      console.log("Please select a category.");
      return; 
    }
    const newCategory = {
      ...formData,
      category:selectedCategory,
      image: fileUrl, 
    };

    try {
     
      console.log(newCategory,"body for add course");
      
      const response = await addCourse(newCategory);
      console.log('Course added successfully',response);
      console.log(response.data,"successmessage");
      
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
      
    } catch (error:any) {
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

  
  const handleFileChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0]
    if(file){
       generateUrl(file)
    }else{
     console.log("nulll");
     
    }
 })
    
  const generateUrl=async(img:File)=>{

    try{
      console.log()
      const datas=new FormData()
      datas.append('file',img)
      datas.append('upload_preset','stitchy')
      datas.append('cloud_name','doottwqrx')
      console.log("hereeee????");
      
      
      const {data}=await axios.post(
        "https://api.cloudinary.com/v1_1/doottwqrx/image/upload",datas
      )

      setUrl(data.url)
      
      console.log("urls:",data);
      if(data.url){
        setShowButton(true)
     }
      console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
      return data.url
    
    }
  catch(error){
    console.log(error);
    
  }
   
   
 }
console.log("urlllll",fileUrl);



  return (
    <div className='flex'>
      <div className='w-1/5'>
        <Home />
      </div>
      <div className='m-32'>
        <div className='h-screen top-0 flex items-center justify-center'>
          <section className='signUp '>
            <div className='container_login '>
              <div className='signUp-content'>
                <div className='signUp-form '>
                  <h2 className='form-title text-lavender'>Add Course</h2>
                  
                   
                      <div>
                      <form onSubmit={handleSubmit}  className='register-form ' id='register-form'>
                        
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
                         </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
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
                           </div>
                        
                        <div className='form-group'>
                          <label htmlFor='title'>
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
                            </div>
                            <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='duration(month)'
                            name='duration'
                            value={formData.duration}
                            onChange={handleInputChange}
                          />
                            </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='courseFee'
                            name='courseFee'
                            value={formData.courseFee}
                            onChange={handleInputChange}
                          />
                          </div>
                        
                      
              
              
              
                                     
<div className='form-group'>
              {fileUrl?(
          <div className='w-full h-96 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl})` }}>
          <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
        
            </div>
         
          </div>
      ):(
        <div className='w-full h-96 p-5  bg-white flex justify-end'>
          <div>
       <form>
       <div className='text-center'>
       <label>
       <input  type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
       <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
                                    <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image"/>
                                    </div>
                                    <p className="ml-20 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                
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
                      <ToastContainer/>
                                       
                      </div>
                      
                         
               
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
   
  