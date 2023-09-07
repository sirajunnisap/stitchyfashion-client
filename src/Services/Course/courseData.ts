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