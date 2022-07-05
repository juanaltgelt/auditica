import { createContext, useState } from "react";
import AuthService from "../services/auth.service";

const Authcontext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(AuthService.getCurrentUser());

    
    return (
        <Authcontext.Provider value={{auth, setAuth}}>
            {children}
        </Authcontext.Provider>
    )
}

export default Authcontext;