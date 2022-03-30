import axios from "axios";

import { updateUser } from "../../redux/actions/auth";
import { startLoading, endLoading, notifySuccess, notifyFail } from "../../redux/actions/common";

export const updateFirstName = (email, firstName) => {
	return async dispatch => {
		const reqBody = {
			email: email,
			firstName: firstName,
		};
		try {
			dispatch(startLoading());
			const { data } = await axios.post("/user/updateFirstName", reqBody);
			const { successMsg, errorMsg } = data;
			console.log(data);
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
				dispatch(updateUser(data));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in updateFirstName...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const updateLastName = (email, lastName) => {
	return async dispatch => {
		const reqBody = {
			email: email,
			lastName: lastName,
		};
		try {
			dispatch(startLoading());
			const { data } = await axios.post("/user/updateLastName", reqBody);
			const { successMsg, errorMsg } = data;
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
				dispatch(updateUser(data));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in updateLastName...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const updateCompany = (email, company) => {
	return async dispatch => {
		const reqBody = {
			email: email,
			company: company,
		};
		try {
			dispatch(startLoading());
			const { data } = await axios.post("/user/updateCompany", reqBody);
			const { successMsg, errorMsg } = data;
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
				dispatch(updateUser(data));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in updateCompany...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const updateMoney = (email, money) => {
	return async dispatch => {
		const reqBody = {
			email: email,
			money: money,
		};
		try {
			dispatch(startLoading());
			const { data } = await axios.post("/user/updateMoney", reqBody);
			const { successMsg, errorMsg } = data;
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
				dispatch(updateUser(data));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in updateMoney...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const updateChallenges = (email, challenge) => {
    return async dispatch => {
        const reqBody = {
            email: email,
            challenge: challenge
        }
        console.log(reqBody)
        try {
            dispatch(startLoading())
            const { data } = await axios.post('/challenge/updateChallenges', reqBody)
            const { successMsg, errorMsg } = data
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in updateChallenge...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}
export const addFriend = (email, friendEmail) => {
    return async dispatch => {
        const reqBody = {
            email: email,
            friendEmail: friendEmail
        }
        try {
            dispatch(startLoading())
            const { data } = await axios.post('/user/updateFriendsList', reqBody)
            const { successMsg, errorMsg } = data
            if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
        } catch (error) {
            console.log("There was an error in updateFriends...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
    }
}
export const removeFriend = (email, friendEmail) => {
	return async dispatch => {
		const reqBody = {
			email: email,
			friendEmail: friendEmail
		}
		try {
			dispatch(startLoading())
            const { data } = await axios.post('/user/updateFriendsList', reqBody)
            const { successMsg, errorMsg } = data
			if (successMsg) {
                dispatch(notifySuccess(successMsg)) 
                dispatch(updateUser(data))
            }
            if (errorMsg) dispatch(notifyFail(errorMsg))
            dispatch(endLoading())
		} catch (error) {
            console.log("There was an error in removeFriends...", error)
            dispatch(notifyFail(error.message))
            dispatch(endLoading())
        }
	}
}
// TODO: update mongo actions for the other user fields like water, titles, etc.
