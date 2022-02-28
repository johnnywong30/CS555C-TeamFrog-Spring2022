import axios from 'axios'

import { updateUser } from '../../redux/actions/auth'
import { startLoading, endLoading, notifySuccess, notifyFail } from '../../redux/actions/common'

export const updateFirstName = (email, firstName) => {
    return async dispatch => {
        const reqBody = {
            email: email,
            firstName: firstName
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post('/user/updateFirstName', reqBody)
            const { successMsg, errorMsg } = data
            console.log(data)
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in updateFirstName...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}

export const updateLastName = (email, lastName) => {
    return async dispatch => {
        const reqBody = {
            email: email,
            lastName: lastName
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post('/user/updateLastName', reqBody)
            const { successMsg, errorMsg } = data
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
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

export const updateCompany = (email, company) => {
    return async dispatch => {
        const reqBody = {
            email: email,
            company: company
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post('/user/updateCompany', reqBody)
            const { successMsg, errorMsg } = data
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in updateCompany...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}

export const refetchUser = (email) => {
    return async dispatch => {
        const reqBody = {
            email: email
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post('/user/refetchUser', reqBody)
            const { successMsg, errorMsg } = data
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in refetchUser...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}
// TODO: update mongo actions for the other user fields like water, titles, etc.
