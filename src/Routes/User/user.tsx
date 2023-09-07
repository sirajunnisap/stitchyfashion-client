import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from '../../Pages/client/Login/Register';
import LoginWithGoogle from '../../Pages/client/Login/LoginWithGoogle';
import Login from '../../Pages/client/Login/Login';
import Home from '../../Pages/client/Home/Home';
import UserProfile from '../../Pages/client/Home/UserProfile';
import DesignerForm from '../../Pages/client/Designer/DesignerForm';
import AnimatedText from '../../Components/Logo/AnimatedText';
import LogoText from '../../Components/Logo/LogoText';
import UserProtected from './userProtected';
import ListDesigners from '../../Pages/client/Designer/ListDesigners';
import { UseAppSelector } from '../../Redux/hooks';
import ListofCourses from '../../Pages/client/Course/ListOfCourses';
import CourseDetails from '../../Pages/client/Course/CourseDetails';
import EditProfile from '../../Components/client/Profile/EditProfile';
import Pricing from '../../Components/client/Pricing';
import VerifyMail from '../../Pages/client/Login/VerifyMail';


const UserRoute:React.FC = () => {
  const IsAuth = UseAppSelector(state=>state.User.accessToken)
  console.log(IsAuth,"isAuth");
  
 
  return (
    <div>
      <Routes>
        <Route path='/logo' element={<LogoText/>}/>
        <Route path='/' element={<Home/> } />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/verifyEmail/:id' element={<VerifyMail/>}/>
        <Route path='/login' element={IsAuth?<Home/>:<Login/>}/>

        <Route path='/profile' element={<UserProtected><UserProfile/></UserProtected>}/>
        {/* <Route path='/updateProfile' element={<UserProtected><EditProfile/></UserProtected>}/> */}
        
        <Route path='/formForDesigner' element={<DesignerForm/>}/>
        
        <Route path='/listOfDesigners' element={<ListDesigners/>}/>
        <Route path='/listOfCourses' element={<ListofCourses/>}/>
        <Route path='/courseDetails/:id' element={<CourseDetails />} />
        <Route path='/pricing' element={<Pricing/>}/>

      </Routes>
    </div>
  )
}

export default UserRoute;
