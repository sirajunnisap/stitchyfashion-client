import adminAxious from "../../Axios/adminAxios";
import designerAxios from "../../Axios/designerAxios";
import { designerType } from "../../Models/Models";

export const getAllDesignerData = async():Promise<any>=>{
    const res = await adminAxious.get('getDesigners');
    console.log(res,"response");
    
    const data = res.data
    
    console.log(data,"usersdata");
    
    return data
}


export const profile = async():Promise<designerType>=>{
    const res = await designerAxios.get('profile')
    console.log(res,"res");
    
    const data = res.data
    return data
}


export const updateProfile = async(name:string,email:string,phone:number,password:string)=>{
    const res = await designerAxios.put('updateProfile',{name,email,phone,password})

    const data = res.data
    return data
}