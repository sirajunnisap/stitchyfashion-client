import React from 'react'; // Removed unnecessary imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import designerAxios from '../../../Axios/designerAxios';
import { useNavigate } from 'react-router-dom';
import Home from '../Home';
import './addCourse.css';
import { Init } from 'v8';
import { addCourse } from '../../../Services/designer/Coureses';

// Define your initial values type
type initialValueType = {
  title: string;
  description: string;
  designer: string;
  duration: number|null; // Change this to string
  level: string;
  courseFee: number | null;
  image: string;
  startDate: Date | null;
  endDate: Date | null;
};

const AddCourses: React.FC = () => {
  const navigate = useNavigate();


const initialValues:initialValueType = {
  title:'',
  description:'',
  designer:'',
  duration:null,
  level:'',
  courseFee:null,
  image:'',
  startDate:null,
  endDate:null

}

  // Create validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Title must be at least 3 characters').required('Please enter title'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').required('Please enter description'),
    designer: Yup.string().required('Please enter designer'),
    duration: Yup.string().required('Please enter duration'),
    level: Yup.string().required('Please enter level (Beginner, Intermediate, Advance)'),
    courseFee: Yup.number().required('Please enter course fee'),
    image: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date(),
  });

  const onSubmit = async (values: initialValueType) => {

    console.log(values.title,values.level);
    
    try {
     
      const response = await addCourse(values.title,values.description,values.designer,values.duration,values.level,values.courseFee,values.image,values.startDate,values.endDate);
      console.log('Course added successfully',response);

      navigate('/listOfCourses');
      
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className='flex'>
      <div className='w-1/5'>
        <Home />
      </div>
      <div className='m-32'>
        <div className='h-screen w-full top-0 flex items-center justify-center'>
          <section className='signUp '>
            <div className='container_login '>
              <div className='signUp-content'>
                <div className='signUp-form w-1/2 '>
                  <h2 className='form-title text-lavender'>Add Course</h2>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {formik => (
                      <Form className='register-form' id='register-form'>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.title && formik.errors.title ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='title'
                          />
                          <ErrorMessage name='title' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.description && formik.errors.description ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='description'
                          />
                          <ErrorMessage name='description' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.designer && formik.errors.designer ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='designer'
                          />
                          <ErrorMessage name='designer' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.duration && formik.errors.duration ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='duration'
                          />
                          <ErrorMessage name='duration' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.level && formik.errors.level ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='level'
                          />
                          <ErrorMessage name='level' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='text'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.courseFee && formik.errors.courseFee ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='courseFee'
                          />
                          <ErrorMessage name='courseFee' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='date'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.startDate && formik.errors.startDate ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='startDate'
                          />
                          <ErrorMessage name='startDate' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='title'>
                            <i className='zmdi zmdi-account material-icons-name'></i>
                          </label>
                          <Field
                            type='date'
                            className={`mt-2 p-2 rounded-lg border w-full ${
                              formik.touched.endDate && formik.errors.endDate ? 'border-red-500' : ''
                            }`}
                            placeholder='Title'
                            name='endDate'
                          />
                          <ErrorMessage name='endDate' component='div' className='text-red-500 text-sm font-semibold pt-1' />
                        </div>
                        {/* Repeat similar pattern for other fields */}
                        {/* ... */}
                        <div className='form-group form-button'>
                          <button
                            type='submit'
                            className='w-full text-white bg-[#22A78C] hover:bg-[#306c60] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                          >
                            SAVE
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                {/* ... */}
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
   
  
  
//   const onSubmit = async (values: initialValueType) => {

//     console.log(values,"values of the course");
    
//    console.log(values.description);
//    try {
    
//     const Course =  await addCourse(
//         values.title,
//         values.description,
//         values.designer,
//         values.duration || 0,
//         values.level,
//         values.courseFee || 0, 
//         values.image,
//         values.startDate || new Date(), // Provide a default value if startDate is null
//         values.endDate || new Date() // Provide a default value if endDate is null
//     );
//    if(Course){
    
//     setResError(undefined)
//     navigate('/listOfCourses')
//    }
//    } catch (error:any) {
//     setResError(error?.response?.data?.message)
//     setResSuccess(undefined)
//    }
