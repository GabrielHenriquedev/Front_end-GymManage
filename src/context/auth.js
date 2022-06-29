import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { ConctApi,sessaoDeLogin } from "../services/ConectApi";
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

    const login = async (email,senha) =>{
        console.log("login",{email,senha});
        
        const response = await sessaoDeLogin(email,senha)

        const loggedUser= response.data.user
        const token= response.data.token
        localStorage.setItem("user",JSON.stringify(loggedUser))
        localStorage.setItem("token",token)

        ConctApi.defaults.headers.Authorization = `Bearer ${token}`
        
        setUser(loggedUser)
        navigate("/escolhas")
        
    }



    const logout =() =>{
        console.log("to fora")

        localStorage.removeItem("user")
        localStorage.removeItem("token")

        ConctApi.defaults.headers.Authorization= null

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

