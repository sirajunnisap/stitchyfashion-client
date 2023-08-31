import adminAxious from "../../Axios/adminAxios";
import { adminType } from "../../Models/Models";
export const adminLogin = async(email:string,password:string)=>{
   const res =  await adminAxious.post('/login',{email,password})

    const data = res.data
    return data
}

export const profile = async():Promise<adminType>=>{
    const res = await adminAxious.get('profile')
    console.log(res,"res");
    
    const data = res.data
    return data
}


export const updateProfile = async(name:string,email:string,phone:number,password:string):Promise<any>=>{
    const res = await adminAxious.put('updateProfile',{name,email,phone,password})

    const data = res.data
    return data
}