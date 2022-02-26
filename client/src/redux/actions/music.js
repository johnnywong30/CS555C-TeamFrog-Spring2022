export const startMusic = () => {
    return async dispatch => {
        dispatch({
            type: "PLAY_MUSIC"
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

export const changeMusic = () => {
    return async dispatch => {
        dispatch({
            type: "CHANGE_MUSIC"
        })
    }
}