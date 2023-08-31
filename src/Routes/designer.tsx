import { Route, Routes } from "react-router-dom"
import AddCourse from "../Pages/designer/AddCourse"
import ResumeForm from "../Pages/designer/ResumeForm";
import DesignerHome from "../Pages/designer/DesignerHome";
import Login from "../Pages/designer/Login";
import Profile from "../Pages/designer/Profile";

 const DesignerRoute:React.FC = ()=>{
    return(
        <div>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/updateProfile" element={<ResumeForm/>}/>
        <Route path="/" element={<DesignerHome/>}/>
        <Route path="/addCourse" element={<AddCourse/>}/>
        <Route path="/courseList" element={<AddCourse/>}/>
        <Route path="/editCourse"/>
        <Route path="/unlistCourse"/>
    </Routes>
    </div>
    )
 }

 export default DesignerRoute;