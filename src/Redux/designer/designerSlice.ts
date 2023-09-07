import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    accessToken:string
  
}


const initialState:InitialStateType = {
    accessToken:''
}

const designerSlice = createSlice({
    name:'Designer',
    initialState,
    reducers:{
        updateDesignerCredentials:(state,action)=>{
            state.accessToken= action.payload?.accessToken
        },
        logoutDesigner:(state,action)=>{
            state.accessToken="";
        }
    }
})

export const {updateDesignerCredentials,logoutDesigner} = designerSlice.actions
export default designerSlice.reducer