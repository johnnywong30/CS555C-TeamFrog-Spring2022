import axios from "axios";
import { startLoading, endLoading, notifyFail, setFrogUrl} from "../../redux/actions/common";

export const getRandomFrog = () => {
	return async dispatch => {
		try {
			dispatch(startLoading());
			const { data } = await axios.get("/random/randomFrog");
			dispatch(setFrogUrl(data));
			dispatch(endLoading());
		} catch (error) {
			console.log("There was an error in getRandomFrog...", error);
			dispatch(notifyFail(error.message));
			dispatch(endLoading());
		}
	};
};
