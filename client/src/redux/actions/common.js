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