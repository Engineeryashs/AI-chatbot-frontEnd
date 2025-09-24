import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { signinUser, signupUser } from "../helpers/api-communicator";
type User={
    name:string,
    email:string
};
//Aise h humlog interface bhi define karte hain bhaiya
type userAuth={
    isLoggedin:boolean,
    user:User|null,
    signin:(email:string,password:string)=>Promise<void>,
    signup:(name:string,lastName:string,email:string,password:string)=>Promise<void>,
    logout:()=>Promise<void>
}
 const AuthContext=createContext<userAuth|null>(null);

 //Iska matlab hai ek authProvider function ek object m children le rhi h jo ki reactNode type ka hai
export const AuthProvider=({children}:{children:ReactNode})=>{
const [user,setUser]=useState<User|null>(null);
const [isLoggedin,setisLoggedin]=useState<boolean>(false);

useEffect(()=>{
    /*Hello write some code in it*/
},[]); 
   const signin=async (email:string,password:string)=>{
       try {
        const data=await signinUser(email,password);
        console.log(data.user);
        setisLoggedin(true);
        setUser(data.user);
       } catch (error) {
        console.log(error);
       }
   }
   const signup=async (name:string,lastName:string,email:string,password:string)=>{
     try {
        const data=await signupUser(name,lastName,email,password);
        console.log(data.user);
        setisLoggedin(true);
        setUser(data.user);
     } catch (error) {
        console.log(error);
     }
   }
   const logout=async()=>{
    
   }

   const value={
    signup,
    signin,
    logout,
    isLoggedin,
    user
   };
   return(
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   )
}
export const useAuth=()=>useContext(AuthContext)
 
/*Yaha humne bhaiya authContext banaya hai jisme humne sari states likhi userAuth ki isLoggedin,signup,signin etc */