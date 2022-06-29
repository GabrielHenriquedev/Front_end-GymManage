import axios from "axios";

export const ConctApi = axios.create({
    baseURL:"http://localhost:8080"
})


export const sessaoDeLogin = async(email,senha) =>{
    return ConctApi.post("/login",{email,senha})
}