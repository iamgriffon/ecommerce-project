//Esse arquivo pega os cases e designa aos seus payloads

import {userActionTypes} from './user-types'

const INITIAL_STATE = { //Estado inicial do app.js
    currentUser: null,
    SameSite: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }

}

export default userReducer;