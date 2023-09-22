import { Route, Routes } from "react-router-dom"
import AddCourse from "../../Pages/designer/Course/AddCourse"
import DesignerHome from "../../Pages/designer/DesignerHome";
import Profile from "../../Pages/designer/Profile/Profile";
import ListOfCourses from "../../Pages/designer/Course/ListOfCourses";
import ListOfCategories from "../../Pages/designer/ListOfCategories";
import VerifyMail from "../../Pages/designer/VerifyMail";
import DetailsCourse from "../../Pages/designer/Course/DetailsCourse";
import NavBar from "../../Components/designer/Home/Home";
import AddClass from "../../Components/designer/Course/AddClass";
 const DesignerRoute:React.FC = ()=>{

    return(
        <div>
            <NavBar/>
    <Routes>
        {/* <Route path="/login" element={IsAuth?<DesignerHome/>:<Login/>}/> */}
   
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<DesignerHome/>}/>
        <Route path="/addCourse" element={<AddCourse/>}/>
        <Route path="/courseList" element={<ListOfCourses/>}/>
        <Route path="/addClass/:id" element={<AddClass/>}/>
        <Route path="/courseDetails/:id" element={<DetailsCourse/>}/>
        <Route path="/unlistCourse"/>
        <Route path="/categoryList" element={<ListOfCategories/>}/>
    </Routes>
    </div>
    )
 }

 export default DesignerRoute;