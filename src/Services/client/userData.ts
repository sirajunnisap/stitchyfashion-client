import adminAxious from "../../Axios/adminAxios";
import { UserType } from "../../Models/Models";

export const getAllUserData = async():Promise<any>=>{
    const res = await adminAxious.get('getUsers');
    console.log(res,"response");
    
    const data = res.data
    
    console.log(data,"usersdata");
    
    return data
}


export const userData = async():Promise<any>=>{
    const res = await adminAxious.get('getUser')
    console.log(res,"res");
    
    const data = res.data
    return data
}

