
import React, {FormEvent, useState } from 'react';
import UserLoginWithGoogle from './LoginWithGoogle';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../Services/client/userLogin';
import { useAppDispatch } from '../../Redux/hooks';
import { updateUserCredentials } from '../../Redux/client/userSlice';

const UserLogin: React.FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

   const [email,setEmail]=useState<string>("");
   const [password,setPassword]=useState<string>("");

   const [apiError,setApiError] = useState<string>("");

  const loginForm = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();


    
    try {
     
      const User = await userLogin(email,password)
      if(User){
        const {accessToken,user} = User
        console.log('accesstoken',accessToken);
        
        dispatch(updateUserCredentials({accessToken:accessToken,userName:user?.name}))
        navigate('/');
      }
    } catch (error:any) {
      error?.response?.data?.message && setApiError(error?.response?.data?.message)
      console.log(error?.response);
      
    }
  }


  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" method='POST' onSubmit={loginForm} >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <button
          type="submit"
          className="button-style w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >           
            <UserLoginWithGoogle/>
          Sign in with your Google Account
          
        </button>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a onClick={()=>{navigate('/signup')}} className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
        
      </form>
    </div>
  );
};

export default UserLogin;
