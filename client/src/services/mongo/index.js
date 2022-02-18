import { onRegister, onLogin } from "./Auth";

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin
    
}

export default Mongo;