import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../Pages/admin/Dashboard'
import Login from '../Pages/admin/Login'
import GetAllUsers from '../Pages/admin/GetAllUsers'
const AdminRoute = ()=> {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/getUsers' element={<GetAllUsers/>}/>
        
      </Routes>
    </div>
  )
}

export default AdminRoute