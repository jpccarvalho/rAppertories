import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user,setUser] = useState({});
    const navigation = useNavigation();

   //gerar conexão com back-end para gerir persistencia de dados e autenticação

    function signIn(username, password){
            setUser({
                username: username,
            })
            navigation.navigate("Home");
    }

    return(
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;