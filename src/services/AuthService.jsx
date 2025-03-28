import axios from "axios";

const AuthService = {
    login: async(username,password)=>{
        const url = "https://api.escuelajs.co/api/v1/auth/login"
        const response = await axios.post(url,{
            "email":username,
            password
        }) 
        console.log("AuthService:",response);
        if(response.data.access_token){
            localStorage.setItem("userToken",JSON.stringify(response.data))
         
        }
        return response.data
    },
    logout: ()=>{
        localStorage.removeItem("userToken")
        
    }
}

export default AuthService