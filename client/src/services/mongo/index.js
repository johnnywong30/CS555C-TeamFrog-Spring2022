import { onRegister, onLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany, addFriend, updateChallenges, updateCompletedChallenges, removeFriend, updateMeasurement, purchaseFrog } from './user'
import { insertWater, getWater, getWaterHistory } from './water'
import { getFrogList } from "./frog";

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
    // TODO: rest of the updates
    // Water
    insertWater: insertWater,
    getWater: getWater, 
    getWaterHistory: getWaterHistory,
    // Frogs
    purchaseFrog: purchaseFrog,
    getFrogList: getFrogList
}

export default Mongo;