import { Navigate } from "react-router-dom";
import { UseAppSelector } from "../../Redux/hooks";

interface DesignerProtectedProps{
    children:React.ReactElement;
}

const DesignerProtected:React.FC<DesignerProtectedProps>=({children})=>{
    const DesignerToken = UseAppSelector(state=>state.Designer.accessToken)
    console.log(DesignerToken,"designer token in reduxstate");
    
    if(DesignerToken){
        return children
    }else{
        Navigate({to:"/designer/login"})
        return null
    }
}

export default DesignerProtected;