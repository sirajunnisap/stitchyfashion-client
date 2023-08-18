import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage  from "redux-persist/lib/storage";
import userReducer from "./client/userSlice";
import adminReducer from "./admin/adminSlice";

const userPersistConfig = {
    key : 'user',
    storage ,
}

const adminPersistConfig = {
    key: 'admin',
    storage,
}

const persistedUserReducer = persistReducer(userPersistConfig,userReducer);

const persistedAdminReducer = persistReducer(adminPersistConfig,adminReducer);

export const store = configureStore({
    reducer:{
        user:persistedUserReducer,
        admin:persistedAdminReducer
    }
})

const persistor = persistStore(store)
export default persistor;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 