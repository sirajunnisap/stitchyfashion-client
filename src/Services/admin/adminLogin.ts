import adminAxious from "../../Axios/adminAxios";



export const adminLogin = async(email:string,password:string)=>{
    const res =  await adminAxious.post('/login',{email,password})
     console.log(res.data,"adminloginresponse");
     
     const data = res.data
     return data
}
 