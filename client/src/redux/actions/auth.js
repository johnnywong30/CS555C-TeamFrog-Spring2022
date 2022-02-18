export const loginAuthUser = (user) => {
    return async dispatch => {
        dispatch({
            type: "LOGIN_USER",
            payload: user
        })
    }
}


export const logoutAuthUser = () => {
    return async dispatch => {
        dispatch({
            type: "LOGOUT_USER"
        })
    }
}