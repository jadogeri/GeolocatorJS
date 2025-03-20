import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
//import authReducer from "./features/auth/authSlice";
import sessionReducer from "./feature/session/sessionSlice"
//import sessionReducer from "./features/session/sessionSlice"
import { userApiSlice } from "./api/user";
import { businessApiSlice } from "./api/business";
import * as LocalStorage from '../configs/localStorage';
import continentsReducer from "./feature/continents/continentsSlice"




const persistedState = LocalStorage.loadState();
console.log("persisted state ===== ", JSON.stringify(persistedState))

export const store = configureStore({
  reducer: {
   //[apiSlice.reducerPath]: apiSlice.reducer,
    //auth: authReducer,    
    [userApiSlice.reducerPath] : userApiSlice.reducer,
    [businessApiSlice.reducerPath] : businessApiSlice.reducer,
    session : sessionReducer,
    continents : continentsReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);


// Save state to LocalStorage on every state change
store.subscribe(() => {
  LocalStorage.saveState(store.getState());
});
