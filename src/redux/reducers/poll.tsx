import { SET_POLLS, SET_CREATE_POLLS, SET_SINGLE_POLL } from "../actionTypes";


export const polls = (state = {}, action: any) => {
    switch(action.type){
        case SET_POLLS:
            return action.polls
        default:
            return state
    }
}

export const getPoll = (state = {}, action: any) => {
    switch(action.type){
        case SET_SINGLE_POLL:
            return action.poll
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