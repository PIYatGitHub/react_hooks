import React, { createContext, useReducer } from 'react'; 

const initialState = {
    isLoading: false, 
    isLoggedIn: null, //null = we do not know yet, then t/f, which is explainatory
    currentUser: null
}; 

const reducer = (state, action) => {
    switch(action.type){
        case 'LOADING': 
            return{...state, isLoading:true};
        case 'SET_AUTHORIZED': 
            return{...state, isLoading:false, isLoggedIn: true, currentUser: action.payload};
        case 'SET_UNAUTHORIZED': 
            return{...state, isLoading:false, isLoggedIn: false};
        default: 
            return state; 
    }
}; 

//looks like a hook, doesent it>? 
export const CurrentUserContext = createContext(); 
export const CurrentUserProvider = ({children})=> {
    const value = useReducer(reducer, initialState);
    return (
        <CurrentUserContext.Provider 
        value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
};