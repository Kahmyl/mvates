import { Dispatch } from "redux";
import { SET_POLLS } from "../actionTypes";
import { addError, removeError } from "./error";
import { getPolls, createPoll, votePoll } from "../../services/request";
import { pollData, voteData } from "../../services/types";

export const setPolls = (polls: any) => ({
    type: SET_POLLS,
    polls
})

export const setPostPolls = (postPolls: any) => ({
    type: SET_POLLS,
    postPolls
})


export const loadPolls = () => {
    return async (dispatch: Dispatch) => {
        try{
            const{...polls} = await getPolls()
            dispatch(setPolls(polls))
            dispatch(removeError())
        }catch(err: any){
            const error = err.response.data
            dispatch(addError(error))
        }
    }
}

export const storePolls = (data: pollData) => {
    return async (dispatch: Dispatch) => {
        try{
            const{...postPolls} = await createPoll(data)
            dispatch(setPostPolls(postPolls))
            dispatch(removeError())
        }catch(err: any){
            const error = err.response.data
            dispatch(addError(error))
        }
    }
}

export const vote = (data: voteData) => {
    return async (dispatch: Dispatch) => {
        try{
            const{...polls} = await votePoll(data)
            dispatch(setPolls(polls))
            dispatch(removeError())
        }catch(err: any){
            const error = err.response.data
            dispatch(addError(error))
        }
    }
}