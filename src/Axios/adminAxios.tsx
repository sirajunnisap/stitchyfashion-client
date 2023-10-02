import axios from "axios";
import { adminAPI } from "../Constants/API";

const adminAxious = axios.create({
  baseURL: adminAPI,
});


export default adminAxious;




adminAxious.interceptors.request.use(
  (config) => {
      const userCredentialsString = localStorage.getItem("persist:Admin") 
      // console.log(userCredentialsString,'user credential tring hiis fsdihnfdfgtrguj');
      
      if(userCredentialsString){

          const userCredentialObject = JSON.parse(userCredentialsString)
          // console.log(userCredentialObject,'user credentials ');
          
          const accessTokenString = userCredentialObject.accessToken; 
          // console.log(accessTokenString,'access token string is here');
          
          const accessToken = JSON.parse(accessTokenString);
          
          
         //  const userToken = accessTokenObject?.token?.replace(/^"(.*)"$/, "$1");
          // console.log(accessToken,'user token is ok interceptors');
          
          config.headers["Admin"] = `Bearer ${accessToken}`;
      }
      
      return config;
  },
  (error) => {
      console.log("errror und");
      
      return Promise.reject(error);
  }
);


adminAxious.interceptors.response.use(
  (response)=>{
      return response
  },
  (error)=>{
     console.log(error,"errprrrrrrrrrrrrrrom  innnnn interceptor");
     
      return Promise.reject(error)
  }
)