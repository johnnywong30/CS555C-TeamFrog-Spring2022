import { onRegister, onLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany, addFriend } from './user'

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin,
    // Updates
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateCompany: updateCompany,
    addFriend: addFriend,
    // TODO: rest of the updates
    
}

export default Mongo;