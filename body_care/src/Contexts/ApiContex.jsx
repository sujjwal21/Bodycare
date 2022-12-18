import { createContext,useState } from "react";

export const ApiContext=createContext();

export default function ApiContextProvider({children}){
     const [page,setpage]=useState(1);
     const [url,seturl]=useState(`https://jsonserver-125f.onrender.com/products`)
     const [details,setDetails]=useState([])
  const [limit,setLimit]=useState(10);
  const [total,setTotal]=useState("");
  const [state,setState]=useState(true);
  const [order,setOrder]=useState("desc");
    const [search,setSearch]=useState("lipstick")


    return <ApiContext.Provider value={{page,setpage,limit,setLimit,total,setTotal,state,setState,order,setOrder,details,setDetails,url,seturl,search,setSearch}}>{children}</ApiContext.Provider>
};