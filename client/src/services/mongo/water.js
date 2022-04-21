import axios from "axios";

import { updateUser } from "../../redux/actions/auth";
import { startLoading, endLoading, notifySuccess, notifyFail, earnExp } from "../../redux/actions/common";

export const insertWater = (email, amount) => {
	return async dispatch => {
		const reqBody = {
			email: email,
			amount: amount,
		};
		try {
			dispatch(startLoading());
			const { data } = await axios.post("/water/add", reqBody);
			const { successMsg, errorMsg, expEarned, leveledUp } = data;
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
				dispatch(updateUser(data));
				setTimeout(() => {
					dispatch(earnExp(expEarned, leveledUp));
				}, 25);
				setTimeout(() => {
					dispatch(endLoading());
				}, 1975);
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in insertWater...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const getWater = (email, id) => {
	return async dispatch => {
		try {
			dispatch(startLoading());
			const { data } = await axios.get(`/water/get/${email}/${id}`);
			const { successMsg, errorMsg } = data;
			console.log(data);
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in getWater...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const getDaily = (email, id) => {
	return async dispatch => {
		try {
			dispatch(startLoading());
			const { data } = await axios.get(`/water/getDaily/${email}/${id}`);
			const { successMsg, errorMsg } = data;
			console.log(data);
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			console.log('am i doing this')
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in getDaily...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};

export const getWaterHistory = email => {
	return async dispatch => {
		try {
			dispatch(startLoading());
			const { data } = await axios.get(`/water/getAll/${email}`);
			const { successMsg, errorMsg } = data;
			console.log(data);
			if (successMsg) {
				dispatch(notifySuccess(successMsg));
			}
			if (errorMsg) dispatch(notifyFail(errorMsg));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in getWaterHistory...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};
