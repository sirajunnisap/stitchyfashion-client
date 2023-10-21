import React, { useState, useEffect } from 'react'
import { profile } from '../../../Services/client/userData'
import LandingPage from '../Home'
import { UserType, paymentType } from '../../../Models/Models'
import { useNavigate } from 'react-router-dom'
import EditProfile from './EditProfile'
import ScrollableFeed from 'react-scrollable-feed'
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
        <section className="pt-20 bg-blueGray-50 ">
        <div className="flex mx-20 rounded-xl h-[600px] border-gray-100 border-2 " style={{ marginTop: "30px", overflow: "hidden" }}>
            <div className="flex w-[60%] ml-16  mt-16">
              <div className="">
                <figure>
                  <img className='rounded-2xl w-60 h-64 ' src={user?.image ? user?.image : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="" />
                </figure>
              </div>
              <div className="ml-14 ">
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
            <div className="text-center mr-10 mt-16 w-2/5">
  <h1 className="text-2xl mb-3 font-extrabold">Purchased Courses</h1>
  <div className="flex flex-wrap items-center justify-center rounded-xl"  style={{ maxHeight: '450px', overflowY: 'auto' }}>
    <div
      className="flex flex-wrap items-center justify-center mt-2 cursor-pointer mb-20"
     
    >
      {course && course.length > 0 ? (
        course?.map((courseItem: paymentType) => (
          <div
            key={courseItem?._id}
            className="flex flex-wrap items-center justify-center mt-4 mr-3 motion-safe:hover:scale-110 transition-[2s]"
          >
            <div className="w-[200px] h-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => navigate(`/entrolledCourse/${courseItem.selectedCourse._id}`)}>
              <img className="rounded-t-lg w-full h-[130px] object-cover" src={courseItem?.selectedCourse?.image} alt="" />
              <div className="p-4 pt-2">
                <h2 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{courseItem?.selectedCourse?.title}</h2>
                {/* <p className="mb-1 text-sm font-sans text-gray-700 dark:text-gray-400">Amount: {courseItem?.amount}</p> */}
                {/* Add more course details here */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
  <p>No purchased courses found.</p>
        <img src="https://www.signupgenius.com/cms/images/3-Common-Pitfalls-When-Creating-a-Sign-Up.png" alt="" />
        </div>
      
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

