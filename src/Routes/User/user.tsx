import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from '../../Pages/client/Login/Register';
import UserProfile from '../../Pages/client/Home/UserProfile';
import DesignerForm from '../../Pages/client/Designer/DesignerForm';
import LogoText from '../../Components/Logo/LogoText';
import UserProtected from './userProtected';
import ListDesigners from '../../Pages/client/Designer/ListDesigners';
import CourseDetails from '../../Pages/client/Course/CourseDetails';
import Pricing from '../../Components/client/Pricing';
import VerifyMail from '../../Pages/client/Login/VerifyMail';
import ListOfCategories from '../../Pages/client/Course/ListOfCategories';
import CategoryDetails from '../../Pages/client/Course/CategoryDetails';
import DesignerDetail from '../../Pages/client/Designer/DesignerDetail';
import LoginedHome from '../../Components/client/LoginedHome';
import ForgotPassword from '../../Components/client/ChangePassword/OtpVerification';
import ChangePassword from '../../Components/client/ChangePassword/ChangePassword';
import UserHome from '../../Components/client/UserHome';
import NavBar from '../../Components/client/Home';


const UserRoute:React.FC = () => {
  
 
  return (
    <div>
      <NavBar/>
      <Routes>
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
        <Route path='/pricing' element={<Pricing/>}/>

      </Routes>
    </div>
  )
}

export default UserRoute;
