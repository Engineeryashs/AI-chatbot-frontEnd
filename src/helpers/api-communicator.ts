import axios from "axios";


export const signupUser=async(name:string,lastName:string,email:string,password:string)=>{
   
    try {
     const res=await axios.post("/user/signup",{
        name,
        lastName,
        email,
        password
    })


    return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const signinUser=async(email:string,password:string)=>
{
    try {
        const res=await axios.post("/user/signin",{
            email,
            password
        })
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const authCheckStatus=async()=>{
    try {
        const res=await axios.get("/user/auth-status");
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const sendChatMessages= async(message:string)=>{
    try {
        const res=await axios.post("/chats/new",{message})
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}