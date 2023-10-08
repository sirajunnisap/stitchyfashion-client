

export type UserType = {
    _id:string,
    name:string,
    email:string,
    phone:number|null,
    password:string,
    isEmailVerified:boolean,
    isBlocked:boolean,
    image:string
}


export type designerType = {
    _id:string;
    name: string;
    email: string;
    phone: number;
    password: string;
    image: string;
    isBlocked:boolean;
    isMailVerified: boolean;
    field:string;
    aboutMe:string;
};


// export type Education = {
//     university: string;
//     major: string;
// };
// education: Education[]; 
// experience: string; 
// skill: string[];


export type adminType = {
    _id:string,
    name:string,
    email:string,
    phone:number,
    password:string,
    image:string
}

export type courseType = {
    _id : string
    title : string,
    description : string,
    designer : string,
    duration : number,   
    level:string,
    category:string,
    classes:classes[],         
    courseFee:number,
    image:string,
    unlist:boolean,
}

export type classes = {
    _id?:string,
    title:string,
    description:string,
    video:string | null
}


export type categoryType = {
    _id : string,
    name:string,
    description:string,
    image:string
}

export type paymentType = {
    _id : string,
    amount:string,
    selectedCourse:courseType,
    user : UserType
}

export type latest= {
    chat: string,
    content: string
}
export type Chats ={
    _id: string,
    chatName: string,
    user: UserType,
    designer: designerType,
    latestMessage: latest
}
export type Message= {
    _id: string,
    user: UserType,
    designer: designerType,
    content: string,
    chat: Chats,
    createdAt: string
}
