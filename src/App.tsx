import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/user";
import AdminRoute from './Routes/admin';
import DesignerRoute from './Routes/designer';

type RoutesProps = {};
const App:React.FC<RoutesProps> = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/*" element={<UserRoute/>}/>
            <Route path="/admin/*" element={<AdminRoute/>}/>
            <Route path="/designer/*" element={<DesignerRoute/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
