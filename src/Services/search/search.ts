import adminAxious from "../../Axios/adminAxios";
import designerAxios from "../../Axios/designerAxios";
import userAxios from "../../Axios/userAxios";
import { UserType, categoryType, courseType, designerType } from "../../Models/Models";


//search for admin------------------------------------------

export const searchUsersAdmin = async(searchQ?:string,sort?:string):Promise<UserType[]>=>{
    const res = await adminAxious.get(`/users?q=${searchQ}&sort${sort}`);
    const data :UserType[] = await res.data
    return data
}

export const searchDesignersAdmin = async(searchQ?:string,sort?:string):Promise<designerType[]>=>{
    const res = await adminAxious.get(`/designers?q=${searchQ}&sort${sort}`);
    const data :designerType[] = await res.data
    return data
}

export const searchCoursesAdmin = async(searchQ?:string,sort?:string):Promise<courseType[]>=>{
    const res = await adminAxious.get(`/courses?q=${searchQ}&sort${sort}`);
    const data :courseType[] = await res.data
    return data
}

export const searchCategoriesAdmin = async(searchQ?:string,sort?:string):Promise<categoryType[]>=>{
    const res = await adminAxious.get(`/categories?q=${searchQ}&sort${sort}`);
    const data :categoryType[] = await res.data
    return data
}







//search for user--------------------------------------------

export const searchDesignersUser = async(searchQ?:string,sort?:string):Promise<designerType[]>=>{
    const res = await userAxios.get(`/designers?q=${searchQ}&sort${sort}`);
    const data :designerType[] = await res.data
    return data
}

export const searchCoursesUser = async(searchQ?:string,sort?:string):Promise<courseType[]>=>{
    const res = await userAxios.get(`/courses?q=${searchQ}&sort${sort}`);
    const data :courseType[] = await res.data
    console.log(data,"dddddddddddddddddddddddddddddddd");
    
    return data
}

export const searchCategoriesUser = async(searchQ?:string,sort?:string):Promise<categoryType[]>=>{
    const res = await userAxios.get(`/categories?q=${searchQ}&sort${sort}`);
    const data :categoryType[] = await res.data
    return data
}






//search for design-------------------------------------------

export const searchUsersDesigner = async(searchQ?:string,sort?:string):Promise<UserType[]>=>{
    const res = await designerAxios.get(`/users?q=${searchQ}&sort${sort}`);
    const data :UserType[] = await res.data
    return data
}

export const searchCoursesDesigner = async(searchQ?:string,sort?:string):Promise<courseType[]>=>{
    const res = await designerAxios.get(`/courses?q=${searchQ}&sort${sort}`);
    const data :courseType[] = await res.data
    return data
}

export const searchCategoriesDesigner = async(searchQ?:string,sort?:string):Promise<categoryType[]>=>{
    const res = await designerAxios.get(`/categories?q=${searchQ}&sort${sort}`);
    const data :categoryType[] = await res.data
    return data
}