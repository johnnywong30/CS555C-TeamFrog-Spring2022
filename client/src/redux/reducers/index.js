import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import authReducer from "./auth"
import commonReducer from "./common"

const reducers = history =>  
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        common: commonReducer
    })


export default reducers
    