import adminAxious from "../../Axios/adminAxios";
import designerAxios from "../../Axios/designerAxios";
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

export const paymentedUser = async(courseId:any):Promise<any>=>{
    const res = await userAxios.get(`paymentedUser/${courseId}`);

    const data = res.data
    console.log(data);
    
    return data
}

export const getpaymenteUsers = async(courseId:any):Promise<any>=>{
    const res = await designerAxios.get(`getPaymentedUsers/${courseId}`)
    
    const data = res.data
    console.log(data,"paymented usersssssssssssssssssssssssssssss");
    
    return data
}