import axios from 'axios'

import { startLoading, endLoading, notifySuccess, notifyFail } from '../../redux/actions/common'
import { setStore } from '../../redux/actions/auth'


export const getFrogList = () => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            const { data } = await axios.get(`/frog/getFrogs`)
            const { successMsg, errorMsg } = data
            if (successMsg) {
                dispatch(notifySuccess(successMsg))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
            dispatch(setStore(data))
        } catch (error) {
            console.log("There was an error in getFrogList...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}

// export const getFrogLink = (frogId) => {
//     return async dispatch => {
//         try {
//             dispatch(startLoading())
            // const { url } = await axios.get(`frog/getFrogLink/${frogId}`)
//             console.log(url)
//             if (successMsg) {
//                 dispatch(notifySuccess(successMsg)) 
//                 dispatch(url)
//             }
//             if (errorMsg) dispatch(notifyFail(errorMsg))
//             dispatch(endLoading())
//         } catch (error) {
//             console.log("There was an error in updateLastName...", error)
//             dispatch(notifyFail(error.message))
//             dispatch(endLoading())
//         }
//     }
// }