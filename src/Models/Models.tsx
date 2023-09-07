

export type UserType = {
    _id:string,
    name:string,
    email:string,
    phone:number|null,
    password:string,
    isEmailVerified:boolean,
    isBlocked:boolean,
    
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
    education: Education[]; 
    experience: string; 
    skill: string[];
    aboutMe:string;
};


export type Education = {
    university: string;
    major: string;
};



export type adminType = {
    _id:string,
    name:string,
    email:string,
    phone:number,
    password:string,
    isEmailVerified:boolean,
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
    _id:string,
    title:string,
    description:string,
    video:string
}