const INIT_STATE = {
    playing: false,
    source: 0,
    volume: 0.5
}

const musicReducer = (state = INIT_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case "START_MUSIC":
            return {
                ...state,
                playing: true,
                source: payload
            }
        case "PAUSE_MUSIC":
            return {
                ...state,
                playing: false
            }
        case "UNPAUSE_MUSIC":
            return {
                ...state,
                playing: true
            }
        case "INCREASE_MUSIC":
            return {
                ...state,
                volume: (state.volume + 0.1)
            }
        case "DECREASE_MUSIC":
            return {
                ...state,
                volume: (state.volume - 0.1)
            }
        case "CHANGE_MUSIC":
            return {
                ...state,
                playing: true,
                source: payload
            }
        default:
            return state
    }
}

export default musicReducer;