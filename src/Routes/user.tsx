import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from '../Pages/client/Login/Register';
import LoginWithGoogle from '../Pages/client/Login/LoginWithGoogle';
import Login from '../Pages/client/Login/Login';
import Home from '../Pages/client/Home/Home';

const UserRoute:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/loginWithGoogle' element={<LoginWithGoogle/>}/>
      </Routes>
    </div>
  )
}

export default UserRoute;
