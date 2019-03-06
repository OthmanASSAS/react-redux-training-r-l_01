import {SET_AUTHENTIFICATION,INCREMENT_ACTION_COUNT } from './action-types';

export const setAuthentification=(isLoggedIn)=>{
    return (dispatch)=>{
        dispatch({
            type:SET_AUTHENTIFICATION,
            payload: isLoggedIn

        });
     
    }
} 
export const incrementActionCount=()=>{
    return {
        type:INCREMENT_ACTION_COUNT
       
    }
} 