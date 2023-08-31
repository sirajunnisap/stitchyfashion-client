import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../Pages/admin/Dashboard'
import Login from '../Pages/admin/Login'
import GetAllUsers from '../Pages/admin/GetAllUsers'
import { useSelector } from 'react-redux'
import ListOfDesigners from '../Pages/admin/DesignersList'
import Profile from '../Pages/admin/Profile'
import ListofCourses from '../Pages/admin/ListofCourses'
const AdminRoute = ()=> {

  // const IsAdmin = useSelector((state:any)=>state.admin)
  return (
    <div>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/getUsers' element={<GetAllUsers/>}/>
        <Route path='/getDesigners' element={<ListOfDesigners/>}/>
        <Route path='/adminProfile' element={<Profile/>}/>
        <Route path='/getCourses' element={<ListofCourses/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoute