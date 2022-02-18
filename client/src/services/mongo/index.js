import { onRegister, onLogin } from "./auth";

const Mongo = {
    // Authentication
    onRegister: onRegister,
    onLogin: onLogin
    
}

export default Mongo;