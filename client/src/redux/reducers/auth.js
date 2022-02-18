import { User } from "../../models/User";

const INIT_STATE = {
    user: {}
}

const authReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: new User(payload)
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}

export default authReducer;