import designerAxios from "../../Axios/designerAxios";
import { classes, courseType } from "../../Models/Models";

export const addCourse = async (courseData:any):Promise<any> => {
    
    const designerCredentials: any = localStorage.getItem('persist:Designer')

    const designerCredentialsObject = JSON.parse(designerCredentials)

    const designerToken = designerCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(designerToken,"designerToken");
    console.log(courseData,"coursedatawithcategory");

    const res = await designerAxios.post('/addCourse',courseData,
    {headers:{
        Authorization:`Bearer ${designerToken}`
    }});
    console.log(res,"courseadding res");
    
    const data = res.data;
    return data;
};



export const addClass = async(classData:classes):Promise<any>=>{
    console.log(classData,"class data for adding");
    
    const res = await designerAxios.post('/addClass',classData)
    const data = res.data
    return data
}



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