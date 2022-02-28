export const startMusic = (index) => {
    return async dispatch => {
        dispatch({
            type: "START_MUSIC",
            payload: index
        })
    }
}

export const pauseMusic = () => {
    return async dispatch => {
        dispatch({
            type: "PAUSE_MUSIC"
        })
    }
}

export const unpauseMusic = () => {
    return async dispatch => {
        dispatch({
            type: "UNPAUSE_MUSIC"
        })
    }
}

export const increaseMusic = () => {
    return async dispatch => {
        dispatch({
            type: "INCREASE_MUSIC"
        })
    }
}

export const decreaseMusic = () => {
    return async dispatch => {
        dispatch({
            type: "DECREASE_MUSIC"
        })
    }
}

export const changeMusic = (index) => {
    return async dispatch => {
        dispatch({
            type: "CHANGE_MUSIC"
        })
    }
}