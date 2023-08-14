import userAxios from "../../Axios/userAxios";

export const loginWithGoogle = async (email:string,name:string):Promise<any>=>{
    try {
        const res = await userAxios.post('login-googleAuth',{
            email,name
        })
        const data = await res.data
        return data
    } catch (error:any) {
        console.log('error : ',error.message);
        
    }
}

export const userSignup = async (name:string,email:string,password:string):Promise<any>=>{

    const res = await userAxios.post('signup',{name,email,password})

    const data = res.data
    return data
}

export const userLogin = async (email:string,password:string) => {
     
    const res = await userAxios.post('login',{email,password})

    const data = await res.data
    return data

}

