import designerAxios from "../../Axios/designerAxios"

export const getAllCategory = async():Promise<any>=>{
    const res = await designerAxios.get('getCategories')

    const data = res.data
    return data
}
