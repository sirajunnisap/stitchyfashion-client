

import React,{useState} from 'react'

import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import adminAxious from '../../../Axios/adminAxios';


const AddCategoryForm:React.FC = ()=> {

    const [fileUrl,setUrl]=useState<any>("")
    const [showButton,setShowButton]=useState(false)
    const [reserror,setError] = useState<string|null>(null)
console.log(reserror);

    const [formData,setFormData] = useState({
      name:"",
      description:"",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
   
   
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newCategory = {
      ...formData,
      image: fileUrl, 
    };

    console.log(newCategory,"newCataegory");
    
    try {
      const res = await adminAxious.post('/addCategory', newCategory);
      console.log(res.data, "addcategory");
      toast.success(res.data.message);
    } catch (error:any) {
    console.log(error,"error from backend");
   
    
      toast.error(reserror, {
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
    const file:any=e.target.files?.[0]

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file?.type)) {
      // setIsError(true);
      setError("Only JPEG, PNG, and GIF images are allowed.");
      return;
    }
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
     
      <div className='m-32 ml-96'>
        <div className=' flex items-center justify-center '>
          <section className='signUp '>
            <div className='container_login '>
              <div className='signUp-content'>
                <div className='signUp-form'>
                  <h2 className='form-title text-lavender'>Add Category</h2>
                  
                 
                    
                      <div>
                      <form onSubmit={handleSubmit}  className='register-form ' id='register-form'>
                        
                        <div className=''>
                        <div className='form-group'>
                          <label htmlFor='name'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <input
                            type='text'
                            className='mt-2 p-2 text-sm rounded-lg border w-full'
                            placeholder='name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          
                        </div>
                        <div className='form-group'>
                          <label htmlFor='descrption'>
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
{/*                    
         */}
                        
                        
<div className='form-group'>
              {fileUrl?(
          <div className='w-full h-96 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl})` }}>
          <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
      
            </div>
         
          </div>
      ):(
        <div className='w-full h-60 p-5 bg-white flex justify-center'>
        <div>
       <form>
       <div className='text-center'>
       <label>
       <input  type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
       <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
                                    <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image"/>
                                    </div>
                                    <p className="ml-20 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
         
       </label>
        </div>
        </form>
          </div>
       
        </div>
      )
    }
       
      </div>

      {reserror && (
                            <p className="text-red-500 text-sm mt-1">{reserror}</p>
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
  )

}

export default AddCategoryForm


