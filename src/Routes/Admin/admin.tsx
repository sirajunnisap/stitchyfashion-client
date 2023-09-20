import React from 'react'
import { Routes,Route } from 'react-router-dom'
import GetAllUsers from '../../Pages/admin/User/GetAllUsers'
import ListOfDesigners from '../../Pages/admin/Designer/DesignersList'
import Profile from '../../Pages/admin/Profile/Profile'
import ListofCourses from '../../Pages/admin/Course/ListofCourses'
import AddDesigner from '../../Pages/admin/Designer/AddDesigner';
import AddCategory from '../../Pages/admin/Category/AddCategory'
import ListofCategories from '../../Pages/admin/Category/ListofCategories'
import CourseDetail from '../../Components/admin/Course/CourseDetail'
import AdminSidbar from '../../Components/admin/Home/Home'
import AdminDashboard from '../../Pages/admin/SideBar'

const AdminRoute = ()=> {

  return (
    <div>
      
      <AdminSidbar/>
      <Routes >
        {/* <Route path='/login' element={IsAuth?<Dashboard/>:<Login/>}/> */}
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path='/getUsers' element={<GetAllUsers/>}/>
        <Route path='/addDesigner' element={<AddDesigner/>}/>
        <Route path='/getDesigners' element={<ListOfDesigners/>}/>
        <Route path='/adminProfile' element={<Profile/>}/>
        <Route path='/getCourses' element={<ListofCourses/>}/>
        <Route path='/courseDetails/:id' element={<CourseDetail/>}/>
        <Route path='/addCategory' element={<AddCategory/>}/>
        <Route path='/listOfCategories' element={<ListofCategories/>}/>
        {/* <Route path='/getCategories' element={<ListofCategories/>}/> */}
      </Routes>
    </div>
  )
}

export default AdminRoute