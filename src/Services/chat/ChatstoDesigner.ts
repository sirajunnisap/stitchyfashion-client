import designerAxios from "../../Axios/designerAxios";
import userAxios from "../../Axios/userAxios"

export const chatsWithDesigner = async(Id:any)=>{
    const res = await userAxios.post(`/access-chat`,Id)
    
    console.log(res.data,"data from accesschatttttttttt");
    
    return res.data
}

export const chatsWithUser = async(Id:any)=>{

    const res = await designerAxios.post(`/access-chat`,Id)

    console.log(res.data,"data from accesschatttttttttt");
    
    return res.data
}

export const userChat = async(designerId:any)=>{
    const res = await userAxios.get(`/user-chat/${designerId}`)
    console.log(res.data,"fetch user chats with designersssssssssssss");
    
}

export const sendMessage  = async(content:string,chatId:string)=>{
    const res = await userAxios.post(`/sendMessage`,{content,chatId})
    console.log(res.data);

    return res.data
    
}

export const sendMessageDsgr  = async(content:string,chatId:string)=>{
    console.log(content,"contentttttttttttttt");
    
    const res = await designerAxios.post(`/sendMessageDsgr`,{content,chatId})
    console.log(res.data);

    return res.data
    
}

export const getAllMessages = async(chatId:string)=>{
    console.log('kghsdfhgdkghdkhgdkhgdkhg',chatId);

    console.log('kghsdfhgdkghdkhgdkhgdkhg');
    
    const res = await userAxios.get(`/getMsgByChatId/${chatId}`)

    console.log(res, "get all message in a perticular chatId using user and designe r");
    
    return res.data
}

export const getAllMessagesDsgr = async(chatId:string)=>{
    console.log('kghsdfhgdkghdkhgdkhgdkhg',chatId);

    console.log('kghsdfhgdkghdkhgdkhgdkhg');
    
 const res = await userAxios.get(`/getMsgByChatId/${chatId}`);
    console.log(res.data, "get all message in a perticular chatId using user and designe r");
    
    return res.data
}

