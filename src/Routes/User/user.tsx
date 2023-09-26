import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Register from '../../Pages/client/Login/Register';
import UserProfile from '../../Pages/client/Home/UserProfile';
import DesignerForm from '../../Pages/client/Designer/DesignerForm';
import LogoText from '../../Components/Logo/LogoText';
import UserProtected from './userProtected';
import ListDesigners from '../../Pages/client/Designer/ListDesigners';
import CourseDetails from '../../Pages/client/Course/CourseDetails';
import Pricing from '../../Components/client/Payment/Pricing';
import VerifyMail from '../../Pages/client/Login/VerifyMail';
import ListOfCategories from '../../Pages/client/Course/ListOfCategories';
import CategoryDetails from '../../Pages/client/Course/CategoryDetails';
import DesignerDetail from '../../Pages/client/Designer/DesignerDetail';
import LoginedHome from '../../Components/client/LoginedHome';
import UserHome from '../../Components/client/UserHome';
import NavBar from '../../Components/client/Home';
import Checkout from '../../Components/client/Payment/Checkout';
import SuccessPage from '../../Components/client/Payment/PaymentSuccess';
import { UseAppSelector } from '../../Redux/hooks';
import Home from '../../Pages/client/Home/Home';
import Login from '../../Pages/client/Login/Login';
import EntrolledCoursePage from '../../Pages/client/Course/EntrolledCoursePage';


const UserRoute:React.FC = () => {
  
  const IsAuthUser = UseAppSelector(state=>state.User.accessToken)

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);

  const isLoginRoute = location.pathname === '/login';


  // useEffect(() => {
  //   if (IsAuthUser) {
  //     navigate('/', { replace: true }); // Replace the current URL with the home page URL
  //   }
  // }, [IsAuthUser, navigate]);

  return (
    <div>
        {!isLoginRoute && <NavBar />}
      <Routes>
       <Route path='/login' element={IsAuthUser?<Home/>:<Login/>}/>
        <Route path='/logo' element={<LogoText/>}/>
        <Route path='/' element={<UserHome/> } />
        {/* <Route path='/otpVerification' element={<ForgotPassword/>}/> */}
        {/* <Route path='/changePassword/:id' element={<ChangePassword/>}/> */}
        <Route path='/home' element={<LoginedHome/>}/>
        
        <Route path='/verifyEmail/:id' element={<VerifyMail/>}/>
        {/* <Route path='/login' element={IsAuth?<Home/>:<Login/>}/> */}

        <Route path='/profile' element={<UserProtected><UserProfile/></UserProtected>}/>
        {/* <Route path='/updateProfile' element={<UserProtected><EditProfile/></UserProtected>}/> */}
        
        <Route path='/formForDesigner' element={<DesignerForm/>}/>
        
        <Route path='/listOfDesigners' element={<ListDesigners/>}/>
        <Route path='/listOfCategories' element={<ListOfCategories/>}/>
        <Route path='/categoryDetails/:id' element={<CategoryDetails/>}/>
        <Route path='/courseDetails/:id' element={<CourseDetails />} />
        <Route path='/getDesignerById/:id' element={<DesignerDetail/>}/>
        <Route path='/pricing/:id' element={<Pricing/>}/>
        <Route path='/checkout/:id' element={<Checkout/>}/>
        <Route path='/payment-success' element={<SuccessPage/>}/>
        <Route path='/entrolledCourse/:id' element={<EntrolledCoursePage/>}/>
      </Routes>
    </div>
  )
}

export default UserRoute;
