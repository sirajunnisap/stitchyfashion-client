import designerAxios from "../../Axios/designerAxios";
import { courseType } from "../../Models/Models";

export const addCourse = async (
    title: string,
    description: string, 
    designer: string,
    duration: number|null,
    level: string,
    courseFee: number|null,
    image: string,
    startDate: Date|null,
    endDate: Date|null
):Promise<any> => {
    const res = await designerAxios.post('/addCourse', {
        title,
        description,
        designer,
        duration,
        level,
        courseFee,
        image,
        startDate,
        endDate
    });
    console.log(res,"courseadding res");
    
    const data = res.data;
    return data;
};



export const getAllCourses = async (): Promise<any> => {
    const res = await designerAxios.get('getCourses')
    const data = res.data
    return data
}

export const courseDetails = async (): Promise<courseType> => {
    const res = await designerAxios.get('courseDetails')
    const data = res.data
    return data
}

export const editCourse = async (title: string,
    descriptioin: string,
    desiger: string,
    duration: number,
    level: string,
    courseFee: number,
    image: string,
    startDate: Date,
    endDate: Date): Promise<any> => {
    const res = await designerAxios.put('editCourse', {
        title,
        descriptioin,
        desiger,
        duration,
        level,
        courseFee,
        image,
        startDate,
        endDate
    })
    const data = res.data
    return data
}