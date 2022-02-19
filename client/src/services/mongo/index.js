import { onRegister, onLogin } from "./auth";
import { updateFirstName, updateLastName, updateCompany } from './user'

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin,
    // Updates
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateCompany: updateCompany,
    // TODO: rest of the updates
    
}

export default Mongo;