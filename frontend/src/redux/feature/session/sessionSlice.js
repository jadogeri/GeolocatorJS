import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    username : "user", 
    email : "mail",
    password : "pass",
    roles : [],
    errorMessage : '', 
    isLoading :  true,
    isLoggedIn : false,
    expiration : null 
  
}


const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,

  reducers: {

    setSessionData : (state, action) => {
        return {...state, ...action.payload};
    },
    setUsername : (state , action) =>{
        state.username = action.payload
    },
    setEmail : (state , action) =>{
        state.email = action.payload
    },
    setError : (state , action) =>{
        state.errorMessage= action.payload
    }

  },
});

export const {
    setSessionData,
    setUsername,
    setEmail,
    setError
} = sessionSlice.actions;

export const selectSessionState= (state) => { return state.session};
export const selectSessionError= (state) => { return state.session.errorMessage};

// export const selectSessionJur= (state) => { return state.session.jur};
// export const selectSessionTaxYear= (state) => { return state.session.taxyear};

export default sessionSlice.reducer;