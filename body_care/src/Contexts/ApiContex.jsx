import { createContext,useState } from "react";

export const ApiContext=createContext();

export default function ApiContextProvider({children}){
     const [page,setpage]=useState(1);
  const [limit,setLimit]=useState(5);
  const [total,setTotal]=useState("");
  const [state,setState]=useState(true);
  const [order,setOrder]=useState("desc");

    return <ApiContext.Provider value={{page,setpage,limit,setLimit,total,setTotal,state,setState,order,setOrder}}>{children}</ApiContext.Provider>
};