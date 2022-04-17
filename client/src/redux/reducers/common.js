const INIT_STATE = {
    msg: '',
    loading: false,
    status: '',
    gradientPos: 0,
    expEarned: 0,
    leveledUp: false
}

const commonReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case "START_LOADING":
            return {
                ...state,
                loading: true
            } 
        case "END_LOADING":
            return {
                ...state,
                loading: false,
                expEarned: 0,
                leveledUp: false
            }
        case "SET_NOTIFICATION": 
            return {
                ...state,
                msg: payload,
            }
        case "NOTIFICATION_SUCCESS":
            return {
                ...state,
                msg: payload,
                status: 'success'
            }
        case "NOTIFICATION_FAIL":
            return {
                ...state,
                msg: payload,
                status: 'error'
            }
        case "NOTIFICATION_CLEAR":
            return {
                ...state,
                msg: payload,
            }
        case "SET_GRADIENT":
            return {
                ...state,
                gradientPos: payload
            }
        case "EARNED_EXP":
            const { expEarned, leveledUp } = payload
            return {
                ...state,
                expEarned: expEarned,
                leveledUp: leveledUp
            }
        default:
            return state
    }
}

export default commonReducer;