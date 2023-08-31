import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    accessToken:string,
    designerName:string
}


const initialState:InitialStateType = {
    accessToken:'',
    designerName:''
}

const designerSlice = createSlice({
    name:'Designer',
    initialState,
    reducers:{
        updateDesignerCredentials:(state,action)=>{
            state.accessToken= action.payload?.accessToken
            state.designerName= action.payload?.designerName
        }
    }
})

export const {updateDesignerCredentials} = designerSlice.actions
export default designerSlice.reducer