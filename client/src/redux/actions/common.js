export const startLoading = () => {
    return async dispatch => {
        dispatch({
            type: "START_LOADING"
        })
    }
}

export const endLoading = () => {
    return async dispatch => {
        dispatch({
            type: "END_LOADING"
        })
    }
}

export const notifySuccess = (msg) => {
    return async dispatch => {
        dispatch({
            type: "NOTIFICATION_SUCCESS",
            payload: msg
        })
    }
}

export const notifyFail = (msg) => {
    return async dispatch => {
        dispatch({
            type: "NOTIFICATION_FAIL",
            payload: msg
        })
    }
}

export const notifyClear = () => {
    return async dispatch => {
        dispatch({
            type: "NOTIFICATION_CLEAR"
        })
    }
}

export const notifySet = (msg) => {
    return async dispatch => {
        dispatch({
            type: "SET_NOTIFICATION",
            payload: msg
        })
    }
}

export const setGradient = (pos) => {
    return async dispatch => {
        dispatch({
            type: "SET_GRADIENT",
            payload: pos
        })
    }
}

export const earnExp = (expEarned, leveledUp) => {
    return async dispatch => {
        dispatch({
            type: "EARNED_EXP",
            payload: {
                expEarned: expEarned,
                leveledUp: leveledUp
            }
        })
    }
}

export const setFrogUrl = (url) => {
    return async dispatch => {
        dispatch({
            type: "RANDOM_FROG_URL",
            payload: url
        })
    }
}

export const setColor = (color) => {
    return async dispatch => {
        dispatch({
            type: "COLOR_ID",
            payload: color
        })
    }
}
