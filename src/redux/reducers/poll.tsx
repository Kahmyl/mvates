import { SET_POLLS, SET_CREATE_POLLS } from "../actionTypes";


export const polls = (state = {}, action: any) => {
    switch(action.type){
        case SET_POLLS:
            return action.polls
        default:
            return state
    }
}

export const postPolls = (state = {}, action: any) => {
    switch(action.type){
        case SET_CREATE_POLLS:
            return action.postPolls
        default:
            return state
    }
}