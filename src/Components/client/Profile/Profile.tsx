import React, { useState, useEffect } from 'react'
import { profile } from '../../../Services/client/userData'
import LandingPage from '../Home'
import { UserType, courseType, paymentType } from '../../../Models/Models'
import { Link, useNavigate } from 'react-router-dom'
import EditProfile from './EditProfile'
import FooterHome from '../FooterHome'
import { getPurchasedCourses } from '../../../Services/Course/Coureses'

function Profile() {
  const [user, setUser] = useState<UserType | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [course, setCourse] = useState<paymentType[] | null>(null);
  const navigate = useNavigate()
  useEffect(() => {
    const UserProfile = async () => {
      const User = await profile();
      console.log(User, "userData");
      setUser(User);
      const courses = await getPurchasedCourses();
      console.log(courses, 'courses are here fronted');
      setCourse(courses);
    };
    UserProfile();
  }, []);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className={isModalOpen ? 'blur' : ''}>
        <div>
          <LandingPage />
        </div>
        <section className="pt-20 bg-blueGray-50">
          <div className="container_login" style={{ marginTop: "30px" }}>
            <div className="signUp-content">
              <div className="signUp-image">
                <figure>
                  <img className='rounded-xl' src={user?.image ?user?.image:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="profile image" />
                </figure>
              </div>
              <div className="signUp-form">
                <h2 className="form-title text-lavender">PROFILE</h2>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <p className="profile-field">Name: {user?.name}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <p className="profile-field">Email: {user?.email}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <p className="profile-field">Phone: {user?.phone}</p>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 font-normal text-pink-500 cursor-pointer" onClick={openModal}>
                      <i className='fas fa-edit mr2 text-lg'></i>
                      Edit Profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-28 text-center">
            <h1 className='text-2xl font-extrabold mb-7'>Purchased Courses</h1>
              <div className="flex flex-wrap items-center justify-center">
               

                <div className='flex flex-wrap items-center justify-center mt-10  cursor-pointer mb-20'>
                  {course && course.length > 0 ? (
                    course?.map((courseItem: paymentType) => (
                      <div key={courseItem._id} className='flex flex-wrap items-center justify-center mt-4 mr-3 motion-safe:hover:scale-110 transition-[2s] '>
                        <div className="w-[200px] h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "  onClick={()=> navigate(`/entrolledCourse/${courseItem.selectedCourse._id}`)}>
                          <a href="#">
                            <img className="rounded-t-lg w-full h-[170px] object-cover" src={courseItem.selectedCourse.image} alt="" />
                          </a>
                          <div className="p-4 pt-2">
                            <a href="#">
                              <h2 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{courseItem.selectedCourse.title}</h2>
                            </a>
                            {/* <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">{courseItem.selectedCourse.description}</p> */}
                            <p className="mb-1 text-sm font-sans  text-gray-700 dark:text-gray-400">Amount: {courseItem.amount}</p>
                            {/* Add more course details here */}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No purchased courses found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <EditProfile isOpen={isModalOpen} closeModal={closeModal} setUser={setUser} userData={user} />
    </>
  );
}

export default Profile;

