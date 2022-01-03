import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export const DEFAULT_STATE = {
    message: null
}

const error = (state = DEFAULT_STATE, action: any) => {
    switch(action.type){
        case ADD_ERROR:
            return{...state, message: action.message};
        case REMOVE_ERROR:
            return{...state, message: null};
        default:
            return state;
    }
}

export default error;