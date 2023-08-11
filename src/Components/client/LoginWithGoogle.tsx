import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import {  useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import {FcGoogle} from 'react-icons/fc'
const UserLoginWithGoogle:React.FC =()=> {


  const [ googleUser, setGoogleUser ] = useState<{access_token: string}>();

  const [ googleProfile, setGoogleProfile ] = useState<{
    name: string;
    email: string;
    picture: string;
  } | null>();

  const LoginWithGooleHelper = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(()=>{

    const fetchGoogleProfile = async () => {
      if (googleUser) {
        try {
          const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
            headers: {
              Authorization: `Bearer ${googleUser?.access_token}`,
              Accept: 'application/json',
            },
          });

          setGoogleProfile(res.data);
            
       
        } catch (error:any){
          console.log(error?.response);
        }
      }
    };
  
    fetchGoogleProfile();
  },[googleProfile])

  console.log('googleProfile : ',googleProfile);
  
    // const responseMessage = (response:any) => {
    //     console.log(response);
    // };
    // const errorMessage = (error:any) => {
    //     console.log(error);
    // };
    return (
        <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mx-1 them h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={()=>{ LoginWithGooleHelper()}}
            >
              
              
              <FcGoogle className="text-xl" />
              
               

        </button>
    )
}

export default UserLoginWithGoogle

