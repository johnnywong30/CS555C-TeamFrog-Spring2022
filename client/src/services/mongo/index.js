import { onRegister, onLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany, addFriend, updateChallenges, removeFriend, updateMeasurement } from './user'
import { insertWater, getWater, getWaterHistory } from './water'

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin,
    // Updates
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateCompany: updateCompany,
    updateChallenges: updateChallenges,
    updateMeasurement: updateMeasurement,
    addFriend: addFriend,
    removeFriend: removeFriend,
    // TODO: rest of the updates
    // Water
    insertWater: insertWater,
    getWater: getWater, 
    getWaterHistory: getWaterHistory
}

export default Mongo;