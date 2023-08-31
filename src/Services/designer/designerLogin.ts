import designerAxios from "../../Axios/designerAxios"

// export const designerSignup = async (name:string,email:string,password:string):Promise<any>=>{

//     const res = await designerAxios.post('signup',{name,email,password})

//     const data = res.data
//     return data
// }

export const designerLogin = async (email:string,password:string) => {
     
    const res = await designerAxios.post('login',{email,password})

    const data = await res.data
    return data

}

