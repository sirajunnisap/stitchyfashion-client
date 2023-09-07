import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/User/user";
import AdminRoute from './Routes/Admin/admin';
import DesignerRoute from './Routes/Designer/designer';

type RoutesProps = {};
const App:React.FC<RoutesProps> = () =>  {

  return (
        <Router>
          <Routes>
            <Route path="/*" element={<UserRoute/>}/>
            <Route path="/admin/*" element={<AdminRoute/>}/>
            <Route path="/designer/*" element={<DesignerRoute/>}/>
          </Routes>
        </Router>
  );
}

export default App;
