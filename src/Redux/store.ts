import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage  from "redux-persist/lib/storage";
import userReducer from "./client/userSlice";


const userPersistConfig = {
    key : 'user',
    storage ,
}

const persistedUserReducer = persistReducer(userPersistConfig,userReducer)

export const store = configureStore({
    reducer:{
        user:persistedUserReducer
    }
})

const persistor = persistStore(store)
export default persistor;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 