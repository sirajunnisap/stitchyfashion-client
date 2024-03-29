import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/User/user";
import AdminRoute from './Routes/Admin/admin';
import DesignerRoute from './Routes/Designer/designer';
import Login from './Pages/client/Login/Login';
import { UseAppSelector } from './Redux/hooks';
import AdminLoginPage from './Pages/admin/Profile/Login';
import DesignerLoginPage from './Pages/designer/Profile/Login';
import AdminProtected from './Routes/Admin/adminProtected';
import DesignerProtected from './Routes/Designer/designerProtected';
import ForgotPassword from './Components/client/ChangePassword/OtpVerification';
import ChangePassword from './Components/client/ChangePassword/ChangePassword';
import Register from './Pages/client/Login/Register';
import VerifyMail from './Pages/designer/VerifyMail';
import Error404 from './Components/404Error/Error404';

type RoutesProps = {};

const App:React.FC<RoutesProps> = () =>  {

  const IsAuthUser = UseAppSelector(state=>state.User.accessToken)
  
  const IsAuthAdmin = UseAppSelector(state=>state.Admin.accessToken)
  console.log(IsAuthAdmin,"admin access token for adminprtected");
  
 
  const IsAuthDesigner = UseAppSelector(state=>state.Designer.accessToken)

  return (
        <Router>
          
          <Routes>
            <Route path="/*" element={<UserRoute/>}/>

            <Route path='/login' element={!IsAuthUser&&<Login/>}/>

            <Route path="/admin/*" element={<AdminProtected><AdminRoute/></AdminProtected>}/>
            <Route path="/admin/login" element={!IsAuthAdmin&&<AdminLoginPage/>}/>
            <Route path="/designer/*" element={<DesignerProtected><DesignerRoute/></DesignerProtected>}/>
            <Route path='/designer/login' element={!IsAuthDesigner&&<DesignerLoginPage/>}/>
            <Route path='/otpVerification' element={<ForgotPassword/>}/>
            <Route path='/changePassword/:id' element={<ChangePassword/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/designer/verifyEmail/:id' element={<VerifyMail/>}/>
            <Route path='*' element={<Error404/>}/>
           

          </Routes>
        </Router>
  );
}

export default App;
