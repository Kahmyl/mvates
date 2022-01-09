import { combineReducers } from "redux";
import error from './error'

import auth from './auth'
import { getPoll, polls, postPolls } from "./poll";

const rootReducer = combineReducers({
    error,
    auth,
    polls,
    getPoll,
    postPolls
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;