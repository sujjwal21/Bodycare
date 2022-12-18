import React, {useState} from 'react'
import { createContext } from 'react';

export const AuthContext=createContext()
export default function AuthContextProvider({children}) {
  const [isAuth,setIsAuth]=useState(false);
  const [token,setToken]=useState("");

const getData=(user)=>{
  return fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
}


  const login=async(email,password)=>{
    const user={email,password}
    setIsAuth(true)
    try{
      const data=await getData(user);
      setToken(data.token)
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <AuthContext.Provider value={{login,isAuth,token,setToken,setIsAuth}}>
      {children}
      </AuthContext.Provider>
  )
}