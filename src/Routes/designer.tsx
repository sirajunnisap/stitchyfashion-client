import { Route, Routes } from "react-router-dom"
import AddCourse from "../Pages/designer/AddCourse"

 const DesignerRoute:React.FC = ()=>{
    return(
        <div>
    <Routes>
        <Route path="/addCourse" element={<AddCourse/>}/>
    </Routes>
    </div>
    )
 }

 export default DesignerRoute;