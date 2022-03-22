import { onRegister, onLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany, updateChallenges } from './user'

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin,
    // Updates
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateCompany: updateCompany,
    updateChallenges: updateChallenges,
    // TODO: rest of the updates
    
}

export default Mongo;