const INIT_STATE = {
    playing: false,
    source: '',
    volume: 0.5
}

const musicReducer = (state = INIT_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case "PLAY_MUSIC":
            return {
                
            }
        case "PAUSE_MUSIC":
            return {

            }
        case "INCREASE_MUSIC":
            return {

            }
        case "DECREASE_MUSIC":
            return {

            }
        case "CHANGE_MUSIC":
            return {

            }
        default:
            return state
    }
}

export default musicReducer;