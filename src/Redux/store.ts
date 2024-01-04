import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage  from "redux-persist/lib/storage";
import userReducer from "./client/userSlice";
import adminReducer from "./admin/adminSlice";
import designerReducer from "./designer/designerSlice";

const userPersistConfig = {
    key : 'User',
    storage ,
    version:1
}

const adminPersistConfig = {
    key: 'Admin',
    storage,
    version:1
}

const designerPersistConfig ={
    key: 'Designer',
    storage,
    version:1
}


const persistedUserReducer = persistReducer(userPersistConfig,userReducer);

const persistedAdminReducer = persistReducer(adminPersistConfig,adminReducer);

const persistedDesignerReducer = persistReducer(designerPersistConfig,designerReducer);

export const store = configureStore({
    reducer:{
        User:persistedUserReducer,
        Admin:persistedAdminReducer,
        Designer:persistedDesignerReducer
    }
})

const persistor = persistStore(store)
export default persistor;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 