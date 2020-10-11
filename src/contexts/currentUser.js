import React, { createContext, useState } from 'react'; 

//looks like a hook, doesent it>? 
export const CurrentUserContext = createContext([{}, ()=> {
}]); 
export const CurrentUserProvider = ({children})=> {
    const [state, setState] = useState({
        isLoading: false, 
        isLoggedIn: null, //null = we do not know yet, then t/f, which is explainatory
        currentUser: null
    }); 
    
    return (
        <CurrentUserContext.Provider 
        value={[state, setState]}>
            {children}
        </CurrentUserContext.Provider>
    )
};