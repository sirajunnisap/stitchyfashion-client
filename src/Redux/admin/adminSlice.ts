import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    accessToken:string
}


const initialState:InitialStateType = {
    accessToken:''
}

const adminSlice = createSlice({
    name:'Admin',
    initialState,
    reducers:{
        updateAdminCredentials:(state,action)=>{
            state.accessToken= action.payload?.accessToken
           
        },
        logoutAdmin:(state,action)=>{
            state.accessToken="";
        }
    }
})

export const {updateAdminCredentials,logoutAdmin} = adminSlice.actions
export default adminSlice.reducer