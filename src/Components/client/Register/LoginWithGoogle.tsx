import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import {  useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {FcGoogle} from 'react-icons/fc'
import { loginWithGoogle } from '../../../Services/client/userLogin';
import { updateUserCredentials } from '../../../Redux/client/userSlice';
import { useAppDispatch } from '../../../Redux/hooks';
import { useNavigate } from 'react-router-dom';

const UserLoginWithGoogle:React.FC =()=> {

  const dispatch=useAppDispatch()
  const navigate=useNavigate()

  const [ googleUser, setGoogleUser ] = useState<{access_token: string}>();

  const [ googleProfile, setGoogleProfile ] = useState<{
    name: string;
    email: string;
    picture:string;
  } | null>();

  const LoginWithGooleHelper = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
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
          console.log(res?.data,"userData from res in headers");
          console.log(res?.data?.email,"email");
          
          const User = await loginWithGoogle(res?.data?.email, res?.data?.name,res?.data?.picture);
          console.log(User,"res.data User");
          
          if(User){
            const {token,userData}=User
               console.log(token,userData,"userData from google");
               
            dispatch(updateUserCredentials({accessToken:token,userName:userData?.name}))
            navigate('/')
          }
        } catch (error:any){
          console.log(error?.response);
        }
      }
    };
  
    fetchGoogleProfile();
  }, [googleUser]);
  


    return(
              
      <button
      type="button"
    
      onClick={() => { LoginWithGooleHelper(); }}
    >
      <FcGoogle className="icon-large" /> 
    </button>

         
    )
}

export default UserLoginWithGoogle

