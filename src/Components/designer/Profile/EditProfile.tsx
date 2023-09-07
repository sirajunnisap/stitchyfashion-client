import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { designerType } from '../../../Models/Models'
import * as Yup from 'yup';
import { updateProfile } from '../../../Services/designer/designerData';
import { removeField } from '../../admin/Designer/cvFunctions';
type initialValueType = {
    name: string;
    email: string;
    phone: number | null;
    image: string;
    education: {
        university: string;
        major: string;
    }[];
    experience: string;
    // skill: string;
};


type EditProfileProps = {
    isOpen: boolean;
    closeModal: () => void;
    setDesigner: React.Dispatch<React.SetStateAction<designerType | undefined>>;
    designerData:designerType|undefined
    // user:UserType|undefined
};

const EditProfile: React.FC<EditProfileProps> = ({ isOpen, closeModal, setDesigner,designerData }) => {

    const initialValues: initialValueType = {
        name: designerData?.name || '',
        email: designerData?.email || '',
        phone: designerData?.phone || null,
        image: designerData?.image || '',
        education: designerData?.education || [],
        experience: designerData?.experience || '',
        // skill: designerData?.skill || '',
      };



    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Name must be at least 3 characters').required('Please enter your name'),
        email: Yup.string().email('Invalid email format').required('Please enter your email'),
        phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Please enter your phone number'),
        // education: Yup.string().required('please enter your Education'),
        // experience: Yup.string().required('please enter your Experience'),
        // skill: Yup.string().required('please enter your skill'),
    });

    const onSubmit = async (values: initialValueType) => {

        console.log(values, "name updated");


        const updatedUser = await updateProfile(values)
        console.log(updatedUser, "updated user");


        closeModal();
        setDesigner(updatedUser)
        // setUser({...user,name:values.name,email:values.email,phone:values.phone})
    }


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
                {/* <div className=" flex items-center justify-center px-5 py-5">
         */}

                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl " >
                    <div className="md:flex">


                        <div className="w-full py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-teal-700">Edit Profile</h1>
                                <p>Update your profile information</p>
                            </div>
                            <div>
                                <Form method="POST" className="register-form" id="register-form">
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">

                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <Field type="text" name="name"
                                                    id="name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Name" /> <ErrorMessage name='name'>
                                                    {
                                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                    }
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-5">

                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <Field type="text" name="email"
                                                    id="email"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email" />
                                                <ErrorMessage name='email'>
                                                    {
                                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                    }
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">

                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <Field type="text" name="phone"
                                                    id="phone" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone" />
                                                <ErrorMessage name='phone'>
                                                    {
                                                        (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                    }
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-2">
                                            <h2 className="section-header bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white">
                                                Education
                                            </h2>
                                            <div className="dynamic-field flex items-center justify-center">
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="education[0].university"
                                                        id="education-university"
                                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                        placeholder="University:"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="education[0].major"
                                                        id="education-major"
                                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                        placeholder="Major:"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="education[0].graduationYear"
                                                        id="education-graduation-year"
                                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                        placeholder="Graduation Year:"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Experience Section */}
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-2">
                                            <h2 className="section-header bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white">
                                                Work Experience
                                            </h2>
                                            <div className="dynamic-field flex items-center justify-center">
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="experience[0].company"
                                                        id="experience-company"
                                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                        placeholder="Company:"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="experience[0].year"
                                                        id="experience-year"
                                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                        placeholder="Employment Year:"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-2">

                                            <div id="education-section">
                                                <h2 className="section-header  bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white ">Skill</h2>
                                                <div className="dynamic-field flex items-center justify-center">
                                                    <div className="form-group  ">
                                                        {/* <label htmlFor="university">University:</label> */}
                                                        <Field type="text" name="skill"
                                                            id="skill" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Skill:" />
                                                    </div>

                                                    {/* <button className="remove-field-btn" onClick={() =>removeField(this)}>Remove</button> */}
                                                </div>
                                            </div>

                                            {/* <ErrorMessage name='skill'>
                                                {
                                                    (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                }
                                            </ErrorMessage> */}
                                        </div>
                                    </div>

                                    {/* <ErrorMessage name='phone'>
                                                {
                                                    (errorMsg) => <div className='error text-red'>{errorMsg}</div>
                                                }
                                            </ErrorMessage> */}
                           

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                                <button type='submit' className="block w-full max-w-xs mx-auto bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white rounded-lg px-3 py-3 font-semibold">Save Changes</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </div >


    {/* </div> */ }

</Formik >
</Modal >
  )
}

export default EditProfile
