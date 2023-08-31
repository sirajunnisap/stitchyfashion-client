import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAppSelector } from '../../Redux/hooks'


interface userProtectedProps{
    children: React.ReactElement;
}
const UserProtected:React.FC<userProtectedProps> = ({children})=>{
 const userToken = UseAppSelector(state=>state.User.accessToken)
console.log(userToken,"usrrrrr token");

 if(userToken){
    return children
 }else{
    Navigate({to:"/login"})
    return null
 }
}

export default UserProtected;