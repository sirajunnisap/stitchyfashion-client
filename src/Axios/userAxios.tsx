import axios from 'axios';
import { userAPI } from '../Constants/API';

const userAxios = axios.create({
     baseURL : userAPI
}) 

export default userAxios ;


userAxios.interceptors.request.use(
     (config) => {
         const userCredentialsString = localStorage.getItem("persist:User") 
         if(userCredentialsString){
 
             const userCredentialObject = JSON.parse(userCredentialsString)
             const accessTokenString = userCredentialObject.accessToken; 
             
             const accessTokenObject = JSON.parse(accessTokenString);
             const userToken = accessTokenObject?.token?.replace(/^"(.*)"$/, "$1");
             console.log(userToken,'user token is ok interceptors');
             
             config.headers["User"] = `Bearer ${userToken}`;
         }
         
         return config;
     },
     (error) => {
         console.log("errror und");
         
         return Promise.reject(error);
     }
 );
 
 
 userAxios.interceptors.response.use(
     (response)=>{
         return response
     },
     (error)=>{
         return Promise.reject(error)
     }
 )