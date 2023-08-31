import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    accessToken:string,
    adminName:string
}


const initialState:InitialStateType = {
    accessToken:'',
    adminName:''
}

const adminSlice = createSlice({
    name:'Admin',
    initialState,
    reducers:{
        updateAdminCredentials:(state,action)=>{
            state.accessToken= action.payload?.accessToken
            state.adminName= action.payload?.adminName
        }
    }
})

export const {updateAdminCredentials} = adminSlice.actions
export default adminSlice.reducer