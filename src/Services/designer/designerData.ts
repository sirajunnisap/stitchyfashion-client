import adminAxious from "../../Axios/adminAxios";
import designerAxios from "../../Axios/designerAxios";
import userAxios from "../../Axios/userAxios";
import { designerType } from "../../Models/Models";

export const getAllDesignerData = async():Promise<any>=>{
    const res = await adminAxious.get('getDesigners');
    console.log(res,"response");
    
    const data = res.data
    
    console.log(data,"usersdata");
    
    return data
}


export const profile = async():Promise<designerType>=>{
    
    const designerCredentials: any = localStorage.getItem('persist:Designer')

    const designerCredentialsObject = JSON.parse(designerCredentials)

    const designerToken = designerCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(designerToken,"designerToken");

    const res = await designerAxios.get('profile',{
        headers:{
            Authorization:`Bearer ${designerToken}`
        }
    })
    console.log(res,"res");
    
    const data = res.data
    return data
}



export const updateProfile = async(designerData:any):Promise<any>=>{

    const designerCredentials: any = localStorage.getItem('persist:Designer')

    const designerCredentialsObject = JSON.parse(designerCredentials)

    const designerToken = designerCredentialsObject?.accessToken.replace(/^"(.*)"$/, '$1');

    console.log(designerToken,"designerToken");

    console.log(designerData,"designer data with image in servese");
    
    const res = await designerAxios.put('updateProfile',designerData,{
        headers:{
            Authorization:`Bearer ${designerToken}`
        }
    } )

    const data = res.data
    return data
}

export const designerById = async(designerId:any):Promise<any>=>{
    console.log(designerId,"designer id");
    
    const res = await userAxios.get(`getDesignerById/${designerId}`)
    console.log(res,"designerdatabyID");
    
    const data = res.data
    return data
}


// designerAxios.interceptors.request.use(
//   (config) => {
//     const designerCredentials: any = localStorage.getItem("designerData");
//     const designerCredentialObject = JSON.parse(designerCredentials);
//     const designerToken = JSON.parse(designerCredentialObject)?.accessToken;

//     if (designerToken) {
//       config.headers["Designer"] = `Bearer ${designerToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// designerAxios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
