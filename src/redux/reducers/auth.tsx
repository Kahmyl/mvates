import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    user: {}
}

const auth = (state = DEFAULT_STATE, action: any) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                user: action.user
            }
        default:
            return state;
    }
}

export default auth;