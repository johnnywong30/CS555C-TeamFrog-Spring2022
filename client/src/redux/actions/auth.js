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

export const updateUser = (user) => {
    console.log('i am here')
    console.log(user)
    return async dispatch => {
        dispatch({
            type: "UPDATE_USER",
            payload: user
        })
    }
}