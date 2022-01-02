import { api } from "./api"
import { loginData } from './types'


export const getPolls = () => {
    return api.get('/polls')
}

export const authLogin = (data: loginData) => {
    return api.post('/login', data)
}

export const logout = (data: any) => {
    return api.post('/logout', data)
}