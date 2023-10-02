import React, { useState } from 'react'
import { categoryType } from '../../../Models/Models';
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import adminAxious from '../../../Axios/adminAxios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editCategory } from '../../../Services/admin/addCategory';

type initialValueType = {
  name: string
  description: string
  image: string|undefined
}
type Props = {
  isOpen: boolean;
  closeModal: () => void;
  setCategoryData: React.Dispatch<React.SetStateAction<categoryType[] | undefined>>;
  categoryData: categoryType | undefined;
  editCategoryIndex: number | undefined;
};
const EditCategory: React.FC<Props> = ({
  isOpen,
  closeModal,
  setCategoryData,
  categoryData,
  editCategoryIndex,
}) => {



  console.log(categoryData, "category details")
  const [fileUrl, setUrl] = useState<any>("")
  const [showButton, setShowButton] = useState(false)
  const [reserror, setError] = useState<string | null>(null)


  const initialValues: initialValueType = {
    name: categoryData?.name || '',
    description: categoryData?.description || '',
    image: categoryData?.image
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid name format')
      .min(3, 'Name must be at least 3 characters')
      .required('Please enter category name'),
    description: Yup.string()
      .min(10, 'description must be at least 10 characters')
      .required('Please enter category description')
  })

  const categoryId = categoryData?._id

  const onSubmit = async (values: initialValueType) => {
    const valuesWithImg = {
      ...values,
      _id: categoryData?._id ?? '',
      image: fileUrl?fileUrl:categoryData?.image
    }

    console.log(valuesWithImg, "values for category update")
    const EditCategory = await editCategory(valuesWithImg, categoryId)
    console.log(EditCategory, "edited category");

    if (editCategoryIndex !== undefined) {
      setCategoryData((prevCategoryData) => {
        if (!prevCategoryData) return prevCategoryData;

        const updatedCategoryData = [...prevCategoryData];
        updatedCategoryData[editCategoryIndex] = valuesWithImg;
        return updatedCategoryData;
      });
    }
    closeModal();
  }




  const handleFileChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0]

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file?.type)) {
       setError("Only JPEG, PNG, and GIF images are allowed.");
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
      console.log(datas, "formdataqqqqqqqqqqqqqqqqqqqwertyu");


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

    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Profile Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className='flex'>

          <div className=''>
            <div className=' flex items-center justify-center'>

              <div className='container_login '>
                <div className='signUp-content'>
                  <div className='signUp-form '>
                    <h2 className='form-title text-lavender'>Edit Category</h2>



                    <div>
                      <Form method="POST" className="register-form" id="register-form">

                        <div className=''>
                          <div className='form-group'>
                            <label htmlFor='name'>
                              <i className='zmdi zmdi-account material-icons-name'></i>
                            </label>
                            <Field
                              type='text'
                              className='mt-2 p-2 text-sm rounded-lg border w-full'
                              id="name"
                              placeholder='name'
                              name='name'

                            />
                            <ErrorMessage name='name'>
                              {
                                (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                              }
                            </ErrorMessage>
                          </div>
                          <div className='form-group'>
                            <label htmlFor='description'>
                              <i className='zmdi zmdi-description'></i>
                            </label>
                            <Field
                              type='text'
                              className='mt-2 p-2 text-sm rounded-lg border w-full'
                              placeholder='description'
                              name='description'

                            />
                            <ErrorMessage name='description'>
                              {
                                (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                              }
                            </ErrorMessage>
                          </div>


                          {/*                    
       */}


                          <div className='form-group'>
                            {initialValues.image || fileUrl ? (
                              <div className='w-full h-60 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl ? fileUrl : initialValues.image})` }}>
                                <div className='w-9 h-9 lg:w-9 lg:h-9 mr-2 rounded-full bg-white '>
                                  <form>
                                    <div className='text-center relative'>
                                      <label className="cursor-pointer">
                                        <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
                                        {/* Use absolute positioning to center the camera icon inside the rounded div */}
                                        <div className="absolute pt-4 pl-4 inset-0 flex items-center justify-center">
                                          <FontAwesomeIcon className='text-black' icon={faCamera} />
                                        </div>
                                      </label>
                                    </div>
                                  </form>
                                </div>

                              </div>
                            ) : (
                              <div className='w-full h-60 p-5 bg-white flex justify-center'>
                                <div>
                                  <form>
                                    <div className='text-center'>
                                      <label>
                                        <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
                                        <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
                                          <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image" />
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
                            className='w-full text-white bg-[#0F5762] hover:bg-teal-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                          >
                            SAVE
                          </button>
                        </div>
                      </Form>
                      <ToastContainer />

                    </div>



                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </Formik>
    </Modal>
  )
}

export default EditCategory
