import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/Reducer";
import newsReducer from "./news/Reducre";
import authReducer from "./auth/Reducer";
import { createVolunteerReducer } from "./volunter/Reducer";


const store = configureStore({
    reducer:{
        contact:contactReducer,
        news:newsReducer,
        auth:authReducer,
        volunteer:createVolunteerReducer
    }
})

export default store