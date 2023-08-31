

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
    _id:string,
    name:string,
    email:string,
    phone:number,
    password:string,
    isEmailVerified:boolean,
    isBlocked:boolean,
    
}

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
    courseFee:number,
    image:string,
    startDate:Date,
    endDate:Date
    unlist:boolean,
}