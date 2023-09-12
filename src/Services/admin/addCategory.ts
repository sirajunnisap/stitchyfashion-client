import adminAxious from "../../Axios/adminAxios";
import { categoryType, classes } from "../../Models/Models";


export const addCategory = async(name:string,description:string,image:string):Promise<any>=>{

    const res = await adminAxious.post('addCategory',{name,description,image})

    console.log(res,"response from backend added category");
    
    const data = res.data;
    return data
}

export const getAllCategory = async():Promise<any>=>{
    const res = await adminAxious.get('getCategories')

    const data = res.data
    return data
}


export const categoryDetails = async(categoryId:any):Promise<categoryType>=>{
    const res = await adminAxious.get(`categoryDetails/${categoryId}`)
    console.log(res);
    
    const data = res.data
    return data
}

export const editCategory = async(categoryData:any, categoryId:any):Promise<any>=>{
    const res = await adminAxious.put(`editCategory/${categoryId}`,categoryData);
    const data = res.data
    console.log(data);

    return data
    
}