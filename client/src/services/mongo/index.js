import { onRegister, onLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany, addFriend, updateChallenges, updateCompletedChallenges, removeFriend, updateMeasurement, purchaseFrog, updateFrogName, updatePrestige } from "./user";
import { addTitle, updateTitle, updateFrog } from "./user";
import { insertWater, getWater, getWaterHistory, getDaily } from "./water";
import { getFrogList } from "./frog";
import { get } from "http";

const Mongo = {
	// Authentication
	onRegister: onRegister,
	onLogin: onLogin,
	// Updates
	updateFirstName: updateFirstName,
	updateLastName: updateLastName,
	updateCompany: updateCompany,
	updateChallenges: updateChallenges,
	updateCompletedChallenges: updateCompletedChallenges,
	updateMeasurement: updateMeasurement,
	addFriend: addFriend,
	removeFriend: removeFriend,
	updatePrestige: updatePrestige,
	// TODO: rest of the updates
	// Water
	insertWater: insertWater,
	getWater: getWater,
	getWaterHistory: getWaterHistory,
	getDaily: getDaily,
	// Frogs
	purchaseFrog: purchaseFrog,
	getFrogList: getFrogList,
	updateFrog: updateFrog,
	updateFrogName: updateFrogName,
	// Titles
	addTitle: addTitle,
	updateTitle: updateTitle,
};

export default Mongo;
