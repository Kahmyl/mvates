import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const error = (state = {message: null}, action: any) => {
    switch(action.types){
        case ADD_ERROR:
            return{...state, message: action.error};
        case REMOVE_ERROR:
            return{...state, message: null};
        default:
            return state;
    }
}

export default error;