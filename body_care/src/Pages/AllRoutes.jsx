import {Routes,Route} from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/Signup";
import Home from "./Home"
import ProductsByBrand from "./ProductByBrand";
import Products from "./Products";

export default function AllRoutes(){

    // API==https://jsonserver-125f.onrender.com
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<SignIn/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/product" element={<Products/>}></Route>
        <Route path="/products" element={<ProductsByBrand/>}></Route>
    </Routes>
}