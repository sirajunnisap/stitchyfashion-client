import adminAxious from "../../Axios/adminAxios";
import { adminType } from "../../Models/Models";

export const profile = async (): Promise<adminType> => {
  try {
    const adminCredentials: any = localStorage.getItem('persist:Admin');

    const adminCredentialsObject = JSON.parse(adminCredentials);

    const adminToken = adminCredentialsObject?.accessToken.replace(/^"(.*)"$/, "$1");

    console.log(adminToken, "admin token from local storage");

    const res = await adminAxious.get('profile', {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });

    console.log(res, "response from backend");

    const data = res.data;

    return data;
  } catch (error) {
    console.error("Error in profile function:", error);
    throw error; // Rethrow the error to handle it at a higher level, e.g., in your UI component.
  }
};
export const updateProfile = async(adminData:any):Promise<any>=>{


  const adminCredentials: any = localStorage.getItem('persist:Admin');

    const adminCredentialsObject = JSON.parse(adminCredentials);

    const adminToken = adminCredentialsObject?.accessToken.replace(/^"(.*)"$/, "$1");

    console.log(adminToken, "admin token from local storage");

  const res = await adminAxious.put(`updateProfile`,adminData,{
      headers:{
          Authorization:`Bearer ${adminToken}`
      }
  } )

  console.log(res,"response");
  
  const data = res.data
  return data
}


export const blockUser = async(userId:string,action:any):Promise<any>=>{
  try {
    console.log(userId,action,"userIdaction for blockUser");
    
    const res = await adminAxious.patch('/block-user',{
         userId,
        action,
      })
    console.log(res,"response of the blockUser");
    
    return res.data
  } catch (error) {
    console.error('Error blocking user:', error);
    throw error;
  }
}


export const blockDesigner = async(designerId:string,action:any):Promise<any>=>{
  try {
    console.log(designerId,action,"userIdaction for blockUser");
    
    const res = await adminAxious.patch('/block-designer',{
         designerId,
        action,
      })
    console.log(res,"response of the blockDesigner");
    
    return res.data
  } catch (error) {
    console.error('Error blocking designerr:', error);
    throw error;
  }
}


// adminAxious.interceptors.request.use(
//   (config) => {
//     const adminCredentials: any = localStorage.getItem("persist:Admin");
//     const adminCredentialObject = JSON.parse(adminCredentials);
//     const adminToken = JSON.parse(adminCredentialObject)?.accessToken;

//     if (adminToken) {
//       config.headers["Admin"] = `Bearer ${adminToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// adminAxious.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
