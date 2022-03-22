import axios from 'axios'

import { startLoading, endLoading, notifySuccess, notifyFail } from '../../redux/actions/common'

export const getFrogLink = (frogId) => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            const { url } = await axios.get(`frog/getFrogLink/${frogId}`)
            console.log(url)
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(url)
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in updateLastName...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}