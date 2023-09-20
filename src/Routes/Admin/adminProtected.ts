import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UseAppSelector } from '../../Redux/hooks'



interface AdminProtectedProps {
   children: React.ReactElement;
 }
 
 const AdminProtected: React.FC<AdminProtectedProps> = ({ children }) => {
   const AdminToken = UseAppSelector(state => state.Admin.accessToken);
   const navigate = useNavigate();
 
   console.log(AdminToken, "admintoken in reduxstate");
 
   if (AdminToken) {
     return children;
   } else {
     navigate('/admin/login'); 
     return null;
   }
 }
 
 

export default AdminProtected;