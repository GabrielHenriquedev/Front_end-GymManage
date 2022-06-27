import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const Authprovaider= ({children})=> {

    const navigate = useNavigate()
    const [user, setUser]= useState(null);
    const [loading,setLoading]= useState(true)

    useEffect(() =>{

        const recoveredUser = localStorage.getItem('user')
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        
        setLoading(false);


    }, []);

    const login =(email,senha) =>{
        console.log("login",{email,senha});

        const loggedUser={
            id: "123",
            email
        }
       localStorage.setItem("user",JSON.stringify(loggedUser))

        if( senha === "123")
        {
            setUser(loggedUser)
            navigate("/escolhas")
        }
    }



    const logout =() =>{
        console.log("to fora")
        localStorage.removeItem("user")
        setUser(null)
        navigate("/login")
    }


return(
    <AuthContext.Provider value={{authenticated:
     !!user , user, login,loading, logout}}>

        {children}
    </AuthContext.Provider>
)
}

