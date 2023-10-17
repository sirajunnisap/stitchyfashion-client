import adminAxious from "../../Axios/adminAxios";
import userAxios from "../../Axios/userAxios";
import { UserType } from "../../Models/Models";

import designerAxios from "../../Axios/designerAxios";
export const getAllUserData = async():Promise<any>=>{

    
    
    const res = await adminAxious.get('getUsers');
    // console.log(res,"response");
    
    const data = res.data
    
    // console.log(data,"usersdata");
    
    return data
}


export const profile = async():Promise<UserType>=>{



    
    const res = await userAxios.get('profile')
    // console.log(res,"resfrombackend");
    
    const data = res.data

    return data
}


export const updateProfile = async(userData:any):Promise<any>=>{

    const res = await userAxios.put(`updateProfile`,userData )

    // console.log(res,"response");
    
    const data = res.data
    return data
}

export const getAllPaymentedUsers = async():Promise<any>=>{

    
    
    const res = await adminAxious.get('getPaymentedUsers');
    console.log(res,"response");
    
    const data = res.data
    
    // console.log(data,"usersdata");
    
    return data
}

export const userDataforDesigner = async(userID:any):Promise<any>=>{
    const res = await designerAxios.get(`getUserData/${userID}`)
    const data = res.data
    return data
}

export const userMoreInfo  = async(userId:any):Promise<any>=>{

    const res = await adminAxious.get(`getUserMoreInfo/${userId}`)
    const data = res.data
    return data
}