import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user,setUser] = useState({});
    const navigation = useNavigation();

    const mock = {
        username:"jpccarvalho",
        pw:"1234"
    }

    function signIn(username, password){
        if(username == mock.username && password == mock.pw){
            setUser({
                username: username,
            })
            navigation.navigate("Home");
        }

    }

    return(
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;