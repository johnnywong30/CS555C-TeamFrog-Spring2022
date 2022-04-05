import { User } from "../../models/User";

const INIT_STATE = {
    user: {},
    auth: false,
    store: []
}

const authReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: new User(payload),
                auth: true
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: {},
                auth: false
            }
        // Note: UPDATE_USER and LOGIN_USER do the same thing code wise
        // It's just that we should keep the semantics consistent
        // With the actual action we're trying to accomplish
        case "UPDATE_USER":
            return {
                ...state,
                user: new User(payload),
                auth: true
            }
        case "LOAD_STORE":
            return {
                ...state,
                store: payload
            }
        default:
            return state
    }
}

export default authReducer;