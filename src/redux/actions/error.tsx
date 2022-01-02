import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes'

export const addError = (error: any) => ({
    type: ADD_ERROR,
    error
});

export const removeError = () => ({
    type: REMOVE_ERROR
});

export type loginData = {
    email: string;
    password: string;
}