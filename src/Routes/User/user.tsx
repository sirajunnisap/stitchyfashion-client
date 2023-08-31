import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from '../../Pages/client/Login/Register';
import LoginWithGoogle from '../../Pages/client/Login/LoginWithGoogle';
import Login from '../../Pages/client/Login/Login';
import Home from '../../Pages/client/Home/Home';
import UserProfile from '../../Pages/client/Home/UserProfile';
import DesignerForm from '../../Pages/client/Home/DesignerForm';
import AnimatedText from '../../Components/Logo/AnimatedText';
import LogoText from '../../Components/Logo/LogoText';
import UserProtected from './userProtected';
import ListDesigners from '../../Pages/client/Home/ListDesigners';
import { UseAppSelector } from '../../Redux/hooks';
import ListofCourses from '../../Pages/client/Home/ListOfCourses';
import CourseDetails from '../../Pages/client/Home/CourseDetails';
import EditProfile from '../../Components/client/EditProfile';



const UserRoute:React.FC = () => {
  const IsAuth = UseAppSelector(state => state.User)
console.log(IsAuth,"isauth in useappselecto");

  return (
    <div>
      <Routes>
        <Route path='/logo' element={<LogoText/>}/>
        <Route path='/' element={<Home/> } />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/verify-email/:userId'/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/profile' element={<UserProtected><UserProfile/></UserProtected>}/>
        {/* <Route path='/updateProfile' element={<UserProtected><EditProfile/></UserProtected>}/> */}
        
        <Route path='/formForDesigner' element={<DesignerForm/>}/>
        
        <Route path='/listOfDesigners' element={<ListDesigners/>}/>
        <Route path='/listOfCourses' element={<ListofCourses/>}/>
        <Route path='/courseDetails' element={<CourseDetails/>}/>
      </Routes>
    </div>
  )
}

export default UserRoute;
