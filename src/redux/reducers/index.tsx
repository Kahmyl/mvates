import { combineReducers } from "redux";
import error from './error'

import auth from './auth'

const rootReducer = combineReducers({
    error,
    auth
})

export default rootReducer;