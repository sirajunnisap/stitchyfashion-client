import { Route, Routes } from "react-router-dom"
import AddCourse from "../../Pages/designer/Course/AddCourse"
import ResumeForm from "../../Pages/designer/Profile/ResumeForm";
import DesignerHome from "../../Pages/designer/DesignerHome";
import Login from "../../Pages/designer/Profile/Login";
import Profile from "../../Pages/designer/Profile/Profile";
import DesignerProtected from "./designerProtected";
import ListOfCourses from "../../Pages/designer/Course/ListOfCourses";
import { UseAppSelector } from "../../Redux/hooks";
import CourseDetails from "../../Components/designer/Course/CourseDetails";

 const DesignerRoute:React.FC = ()=>{
    const IsAuth = UseAppSelector(state=>state.Designer.accessToken)

    return(
        <div>
    <Routes>
        <Route path="/login" element={IsAuth?<DesignerHome/>:<Login/>}/>
        <Route path="/profile" element={<DesignerProtected><Profile/></DesignerProtected>}/>
        <Route path="/dashboard" element={IsAuth?<DesignerHome/>:<Login/>}/>
        <Route path="/addCourse" element={<DesignerProtected><AddCourse/></DesignerProtected>}/>
        <Route path="/courseList" element={<DesignerProtected><ListOfCourses/></DesignerProtected>}/>
        <Route path="/courseDetails/:id" element={<CourseDetails/>}/>
        <Route path="/editCourse"/>
        <Route path="/unlistCourse"/>
    </Routes>
    </div>
    )
 }

 export default DesignerRoute;