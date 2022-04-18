import { onRegister, onLogin, onLogout, onCookieLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany, addFriend, updateChallenges, updateCompletedChallenges, removeFriend, updateMeasurement, purchaseFrog, updateFrogName } from './user'
import { addTitle, updateTitle, updateFrog } from "./user";
import { insertWater, getWater, getWaterHistory } from './water'
import { getFrogList } from "./frog";

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin,
    onCookieLogin: onCookieLogin,
    onLogout: onLogout,
    // Updates
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateCompany: updateCompany,
    updateChallenges: updateChallenges,
    updateCompletedChallenges: updateCompletedChallenges,
    updateMeasurement: updateMeasurement,
    addFriend: addFriend,
    removeFriend: removeFriend,
    // TODO: rest of the updates
    // Water
    insertWater: insertWater,
    getWater: getWater, 
    getWaterHistory: getWaterHistory,
    // Frogs
    purchaseFrog: purchaseFrog,
    getFrogList: getFrogList,
    updateFrog: updateFrog,
    updateFrogName: updateFrogName,
    // Titles
    addTitle: addTitle,
    updateTitle: updateTitle
}

export default Mongo;