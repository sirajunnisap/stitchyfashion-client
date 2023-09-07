import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../../Pages/admin/Dashboard'
import Login from '../../Pages/admin/Profile/Login'
import GetAllUsers from '../../Pages/admin/User/GetAllUsers'
import ListOfDesigners from '../../Pages/admin/Designer/DesignersList'
import Profile from '../../Pages/admin/Profile/Profile'
import ListofCourses from '../../Pages/admin/Course/ListofCourses'
import AdminProtected from './adminProtected';
import AddDesigner from '../../Pages/admin/Designer/AddDesigner'
const AdminRoute = ()=> {

  // const IsAdmin = useSelector((state:any)=>state.admin)
  return (
    <div>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<AdminProtected><Dashboard/></AdminProtected>}/>
        <Route path='/getUsers' element={<GetAllUsers/>}/>
        <Route path='/addDesigner' element={<AddDesigner/>}/>
        <Route path='/getDesigners' element={<ListOfDesigners/>}/>
        <Route path='/adminProfile' element={<AdminProtected><Profile/></AdminProtected>}/>
        <Route path='/getCourses' element={<ListofCourses/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoute