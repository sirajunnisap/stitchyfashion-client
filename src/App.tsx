import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/User/user";
import AdminRoute from './Routes/Admin/admin';
import DesignerRoute from './Routes/Designer/designer';
import Login from './Pages/client/Login/Login';
import { UseAppSelector } from './Redux/hooks';
import Home from './Pages/client/Home/Home';
import AdminLoginPage from './Pages/admin/Profile/Login';
import Dashboard from './Components/admin/Home/Dashboard';
import DesignerHome from './Pages/designer/DesignerHome';
import DesignerLoginPage from './Pages/designer/Profile/Login';
import AdminProtected from './Routes/Admin/adminProtected';
import DesignerProtected from './Routes/Designer/designerProtected';
import AdminDashboard from './Pages/admin/SideBar';
import ForgotPassword from './Components/client/ChangePassword/OtpVerification';
import ChangePassword from './Components/client/ChangePassword/ChangePassword';
import Register from './Pages/client/Login/Register';
import VerifyMail from './Pages/designer/VerifyMail';

type RoutesProps = {};
const App:React.FC<RoutesProps> = () =>  {
  const IsAuthUser = UseAppSelector(state=>state.User.accessToken)
  
  const IsAuthAdmin = UseAppSelector(state=>state.Admin.accessToken)
 
  const IsAuthDesigner = UseAppSelector(state=>state.Designer.accessToken)
  return (
        <Router>
          <Routes>
            <Route path="/*" element={<UserRoute/>}/>
            <Route path='/login' element={IsAuthUser?<Home/>:<Login/>}/>
            <Route path="/admin/*" element={<AdminProtected><AdminRoute/></AdminProtected>}/>
            <Route path="/admin/login" element={IsAuthAdmin?<AdminDashboard/>:<AdminLoginPage/>}/>
            <Route path="/designer/*" element={<DesignerProtected><DesignerRoute/></DesignerProtected>}/>
            <Route path='/designer/login' element={IsAuthDesigner?<DesignerHome/>:<DesignerLoginPage/>}/>
            <Route path='/otpVerification' element={<ForgotPassword/>}/>
            <Route path='/changePassword/:id' element={<ChangePassword/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/designer/verifyEmail/:id' element={<VerifyMail/>}/>
          </Routes>
        </Router>
  );
}

export default App;
