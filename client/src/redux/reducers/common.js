const INIT_STATE = {
    msg: '',
    loading: false,
    status: ''
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
                loading: false
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
        default:
            return state
    }
}

export default commonReducer;