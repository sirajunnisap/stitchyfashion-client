// import {useState,useEffect} from "react"
// import userAxious from '../../Axios/userAxios';
// import adminAxious from '../../Axios/adminAxios';
// import designerAxious from '../../Axios/designerAxios';
// import { useErrorHandler } from "./ErrorHandler";

// export function useProfileDetails({user,setUserData}){
//     const [isLoading,setIsLoading]=useState(true)
//     const {
//         userAuthenticationHandler,
//         adminAuthenticationHandler,
//         designerAuthenticationHandler
//     }=useErrorHandler();

//     useEffect(()=>{
//         async function fetchProfile(){
//             setIsLoading(true);

//             try {
//                 let response:any;
//                 if(user === "User"){
//                     response = await userAxious.get('/profile');
//                 }else if(user === "Admin"){
//                     response = await adminAxious.get('/profile');
//                 }else if(user === "Designer"){
//                     response = await designerAxious.get('/profile');
//                 }
//                 setUserData(response.data.data)
//             } catch (error) {
//                 if(user === "User"){
//                     userAuthenticationHandler(error)
//                 }
//                 if(user === "Admin"){
//                     adminAuthenticationHandler(error)
//                 }
//                 if(user === "Designer"){
//                     designerAuthenticationHandler(error)
//                 }
//                 console.error("Error fetching profile details:", error);
//             }
//             setIsLoading(false)
//         }
//         fetchProfile();
//     },[user]);
//     return {isLoading}
// }
