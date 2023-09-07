import designerAxios from "../../Axios/designerAxios";
import { courseType } from "../../Models/Models";

export const addCourse = async (
    title: string,
    description: string,
    duration: number|null,
    level: string,
    courseFee: number|null,
    image: string|null
):Promise<any> => {
    
    const designerCredentials: any = localStorage.getItem('persist:Designer')

    const designerCredentialsObject = JSON.parse(designerCredentials)

    const designerToken = designerCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(designerToken,"designerToken");

    const res = await designerAxios.post('/addCourse', {
        title,
        description,
        duration,
        level,
        courseFee,
        image,
    },{headers:{
        Authorization:`Bearer ${designerToken}`
    }});
    console.log(res,"courseadding res");
    
    const data = res.data;
    return data;
};



export const getAllCourses = async (): Promise<any> => {

    const designerCredentials: any = localStorage.getItem('persist:Designer')

    const designerCredentialsObject = JSON.parse(designerCredentials)

    const designerToken = designerCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(designerToken,"designerToken");

    const res = await designerAxios.get('getCourses',
    {headers:{
        Authorization:`Bearer ${designerToken}`
    }});

    const data = res.data
    return data
}

export const courseDetails = async (courseId:any): Promise<courseType> => {
    const res = await designerAxios.get(`courseDetails/${courseId}`)
    
    console.log(res,"response of the coursedetails");
    
    const data = res.data
    return data
}
export const editCourse = async (CourseData: any, courseId: any): Promise<any> => {
    const res = await designerAxios.put(`editCourse/${courseId}`, CourseData);
    const data = res.data;
    return data;
  };