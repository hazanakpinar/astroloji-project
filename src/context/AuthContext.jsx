import { createContext, useState } from 'react'
import AuthService from "../services/AuthService";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const[isAuthenticated, setAuthenticated]=useState(JSON.parse(localStorage.getItem("userToken"))?.access_token?true:false)

    const login = async(username,password)=>{
        try{
            const response = await AuthService.login(username,password)
            console.log("AuthContext:",response);
            
            if(response?.access_token){
                localStorage.setItem("userToken", JSON.stringify(response));
                setAuthenticated(true); 
            } else {
                setAuthenticated(false)
            }
        }
        catch(error){
            setAuthenticated(JSON.parse(localStorage.getItem("userToken")))
            setAuthenticated(false)
            throw new Error(error)
        }
    }
    const logout =()=>{
        AuthService.logout()
        setAuthenticated(JSON.parse(localStorage.getItem("userToken")))
    }

    return <AuthContext.Provider value={{login,logout,isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
