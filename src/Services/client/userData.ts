import adminAxious from "../../Axios/adminAxios";
import userAxios from "../../Axios/userAxios";
import { UserType } from "../../Models/Models";
import { useParams } from "react-router-dom";
import { UseAppSelector } from "../../Redux/hooks";
import { log } from "console";
export const getAllUserData = async():Promise<any>=>{

    
    
    const res = await adminAxious.get('getUsers');
    console.log(res,"response");
    
    const data = res.data
    
    console.log(data,"usersdata");
    
    return data
}


export const profile = async():Promise<UserType>=>{


    const userCredentials: any = localStorage.getItem('persist:User')

    const userCredentialsObject = JSON.parse(userCredentials)

    const userToken = userCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(userToken,"usertoken");
    
    const res = await userAxios.get('profile',{
        headers:{
            Authorization:`Bearer ${userToken}`
        }
    })
    console.log(res,"res");
    
    const data = res.data
    return data
}


export const updateProfile = async(userData:any):Promise<any>=>{


    const userCredentials: any = localStorage.getItem('persist:User')

    const userCredentialsObject = JSON.parse(userCredentials)

    const userToken = userCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(userToken,"usertoken");

    const res = await userAxios.put(`updateProfile`,userData,{
        headers:{
            Authorization:`Bearer ${userToken}`
        }
    } )

    console.log(res,"response");
    
    const data = res.data
    return data
}