import {SET_AUTHENTIFICATION} from './action-types';

export const setAuthentification=(isLoggedIn)=>{
    return {
        type:SET_AUTHENTIFICATION,
        payload: isLoggedIn
    }
} 