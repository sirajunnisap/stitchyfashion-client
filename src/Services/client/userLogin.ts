import userAxios from "../../Axios/userAxios";

export const loginWithGoogle = async (email:string,name:string,picture:string):Promise<any>=>{
    try {
        console.log(email,"email from google");
        
        const res = await userAxios.post('login-googleAuth',{
            email,name,picture
        })
        console.log(res,"response form backend in goolgle ");
        
        const data = await res.data
        console.log(data,"res.data");
        
        return data
    } catch (error:any) {
        console.log('error : ',error.message);
        return []
    }
}

export const userSignup = async (name:string,email:string,password:string):Promise<any>=>{

    const res = await userAxios.post('signup',{name,email,password})

    const data = res.data
    return data
}

export const userLogin = async (email:string,password:string) => {
     
    const res = await userAxios.post('login',{email,password})
    console.log(res,"res from backend");
    
    const data = await res.data
    console.log(data,"data in res");
    
    return data

}

