import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore( {
    reducer: {
        user: userReducer,
        profile: userReducer
    }
});

export default store;