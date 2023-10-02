import adminAxious from "../../Axios/adminAxios";
import designerAxios from "../../Axios/designerAxios";
import userAxios from "../../Axios/userAxios";
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



export const updateProfile = async(designerData:any):Promise<any>=>{

      const res = await designerAxios.put('updateProfile',designerData )

    const data = res.data
    return data
}

export const designerById = async(designerId:any):Promise<any>=>{
    console.log(designerId,"designer id");
    
    const res = await userAxios.get(`getDesignerById/${designerId}`)
    console.log(res,"designerdatabyID");
    
    const data = res.data
    return data
}

