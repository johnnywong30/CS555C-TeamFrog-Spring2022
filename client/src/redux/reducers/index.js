import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import authReducer from "./auth"
import commonReducer from "./common"
import musicReducer from "./music"

const reducers = history =>  
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        common: commonReducer,
        music: musicReducer
    })


export default reducers
    