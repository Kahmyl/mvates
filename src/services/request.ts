import { api } from "./api"
import { loginData, pollData, voteData } from './types'


export const getPolls = () => {
    return api.get('/polls')
}

export const authLogin = (data: loginData) => {
    return api.post('/login', data)
}

export const logout = () => {
    return api.post('/logout')
}

export const createPoll = (data: pollData) => {
    return api.post('/createPoll', data)
}

export const votePoll = (data: voteData) => {
    return api.post('/post', data)
}