import { Dispatch } from "redux";
import { addError, removeError, loginData } from "./error";
import { SET_CURRENT_USER } from "../actionTypes";
import { authLogin, logout } from '../../services/request'

export const setCurrentUser = (user: any) => ({
    type: SET_CURRENT_USER,
    user
})

export const loginUser = (data: loginData) => {
    return async (dispatch: Dispatch) => {
        try{
            const {...user} = await authLogin(data)
            dispatch(setCurrentUser(user))
            dispatch(removeError())
        }catch(err: any){
            const error = err.response.data[0]
            dispatch(addError(error))
        }
    }
}

export const logoutUser = (data: any) => {
    return async (dispatch: Dispatch) => {
        try{
            await logout(data)
            dispatch(removeError())
        }catch(err: any){
            const error = err.response.data
            dispatch(addError(error))
        }
    }
}