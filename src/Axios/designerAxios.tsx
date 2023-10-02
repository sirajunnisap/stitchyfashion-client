import axios from 'axios';
import { designerAPI } from '../Constants/API';

const designerAxios = axios.create({
     baseURL : designerAPI
}) 

export default designerAxios ;



designerAxios.interceptors.request.use(
     (config) => {
         const userCredentialsString = localStorage.getItem("persist:Designer") 
        //  console.log(userCredentialsString,'user credential tring hiis fsdihnfdfgtrguj');
         
         if(userCredentialsString){
 
             const userCredentialObject = JSON.parse(userCredentialsString)
            //  console.log(userCredentialObject,'user credentials ');
             
             const accessTokenString = userCredentialObject.accessToken; 
            //  console.log(accessTokenString,'access token string is here');
             
             const accessToken = JSON.parse(accessTokenString);
             
             
            //  const userToken = accessTokenObject?.token?.replace(/^"(.*)"$/, "$1");
            //  console.log(accessToken,'user token is ok interceptors');
             
             config.headers["Designer"] = `Bearer ${accessToken}`;
         }
         
         return config;
     },
     (error) => {
         console.log("errror und");
         
         return Promise.reject(error);
     }
 );
 
 
 designerAxios.interceptors.response.use(
     (response)=>{
         return response
     },
     (error)=>{
        console.log(error,"errprrrrrrrrrrrrrrom  innnnn interceptor");
        
         return Promise.reject(error)
     }
 )