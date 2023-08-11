import React,{FormEvent, useState} from 'react'
import './style.css';
import userAxios from '../../Axios/userAxios';
import { useNavigate } from 'react-router-dom';


const UserRegister:React.FC = ()=> {
  
  const[name,setName]=useState<string>("");
  const[email,setEmail]=useState<string>("");
  const[phone,setPhone]=useState<string>("");
  const[password,setPassword]=useState<string>("");
  const[errMsg,setErrMsg]=useState<string>("");;

  const navigate= useNavigate();

  const signUpForm = (e: FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();

    userAxios.post("/signup",{name,email,phone,password}).then((res)=>{
      console.log(res,"responseaftersign");
      console.log(res.data.status,"responsedata");
      
      if(res.data.status){
        navigate("/login")
      }else{
        setErrMsg("something went wrong")
      }
    })
  }


  return (
    <div className="box w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="register-form space-y-6" method='POST' onSubmit={signUpForm} id='register-form'>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
      
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
        <input type="tel" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone Number" required />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
      </div>

      {/* <a onClick={()=>{
        navigate("/login");
      }}>I'm already member</a>
      */}
         
         <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
       
        <p>{errMsg ? <div style={{ color: "red" }}>{errMsg}</div> : ""}</p>
      </form>

  </div>
  )
}

export default UserRegister;
