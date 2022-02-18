import axios from 'axios'
import bcrypt from 'bcryptjs'

import { loginAuthUser, logoutAuthUser } from '../../redux/actions/auth'
import { startLoading, endLoading, notifySuccess, notifyFail } from '../../redux/actions/common'

const hashPassword = async(plaintext, SALT_ROUNDS = 10) => {
    try {
        const hash = bcrypt.hash(plaintext, SALT_ROUNDS)
        return hash
    } catch (error) {
        throw('Error hashing password...', error)
    }
}

export const onRegister = (firstName, lastName, email, password, company) => {
    return async dispatch => {
        const hashedPass = await hashPassword(password)
        const reqBody = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPass,
            company: company
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post(`/auth/register`, reqBody)
            const { successMsg, errorMsg } = data
            if (successMsg) dispatch(notifySuccess(successMsg))
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in onRegister...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}

export const onLogin = (email, password) => {
    return async dispatch => {
        const reqBody = {
            email: email,
            password: password,
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post(`/auth/login`, reqBody)
            dispatch(loginAuthUser(data))
            const { successMsg, errorMsg } = data
            if (successMsg) dispatch(notifySuccess(successMsg))
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in onLogin...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}