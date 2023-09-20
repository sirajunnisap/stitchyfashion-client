import adminAxious from "../../Axios/adminAxios";
import userAxios from "../../Axios/userAxios";
import { courseType } from "../../Models/Models";

export const getAllCourses = async (): Promise<any> => {

    const res = await userAxios.get('getCourses');
    
    const data = res.data
    return data
}

export const courseDetails = async (courseId:any): Promise<courseType> => {
    const res = await userAxios.get(`courseDetails/${courseId}`)
    
    console.log(res,"response of the coursedetails");
    
    const data = res.data
    return data
}

export const getAllCategory = async():Promise<any>=>{
    const res = await userAxios.get('getCategories')

    const data = res.data
    return data
}


export const courseDetailsForAdmin = async (courseId:any): Promise<courseType> => {
    const res = await adminAxious.get(`courseDetails/${courseId}`)
    
    console.log(res,"response of the coursedetails");
    
    const data = res.data
    return data
}