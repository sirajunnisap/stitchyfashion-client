import { Route, Routes } from "react-router-dom"
import AddCourse from "../../Pages/designer/Course/AddCourse"
import DesignerHome from "../../Pages/designer/DesignerHome";
import Profile from "../../Pages/designer/Profile/Profile";
import ListOfCourses from "../../Pages/designer/Course/ListOfCourses";
import ListOfCategories from "../../Pages/designer/ListOfCategories";
import DetailsCourse from "../../Pages/designer/Course/DetailsCourse";
import NavBar from "../../Components/designer/Home/Home";
import AddClass from "../../Components/designer/Course/AddClass";
import PaymentUser from "../../Components/designer/Users/PaymentUser";
import UsersList from "../../Components/designer/Users/UsersList";
import EditCourse from "../../Components/designer/Course/EditCourse";
import ChatWithUser from "../../Components/client/Chat/ChatWithUser";
import Error404 from "../../Components/404Error/Error404";
 const DesignerRoute:React.FC = ()=>{

    return(
        <div>
            <NavBar/>
    <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<DesignerHome/>}/>
        <Route path="/addCourse" element={<AddCourse/>}/>
        <Route path="/courseList" element={<ListOfCourses/>}/>
        <Route path="/addClass/:id" element={<AddClass/>}/>
        <Route path="/editCourse/:id" element={<EditCourse/>}/>
        <Route path="/courseDetails/:id" element={<DetailsCourse/>}/>
        <Route path="/unlistCourse"/>
        <Route path="/categoryList" element={<ListOfCategories/>}/>
        <Route path="/getPaymentedUsers" element={<PaymentUser/>}/>
        <Route path="/paymentedUsersList/:id" element={<UsersList/>}/>
        <Route path="/chatWithUser/:id" element={<ChatWithUser/>}/>
        <Route path='/notFound' element={<Error404/>}/>
    </Routes>
    </div>
    )
 }

 export default DesignerRoute;