import userAxios from "../../Axios/userAxios"
import { categoryType, courseType } from "../../Models/Models"

export const getAllCategory = async():Promise<any>=>{
    const res = await userAxios.get('getCategories')

    const data = res.data
    return data
}


export const categoryDetails = async(categoryId:any):Promise<courseType[]>=>{
    const res = await userAxios.get(`categoryDetails/${categoryId}`)

    console.log(res,"categorydetail in ress");
    const data = res.data
    return data
}