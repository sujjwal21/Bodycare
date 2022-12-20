import {Routes,Route} from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/Signup";
import Dashboard from "./Dashboard";
import Home from "./Home"
import ProductsByBrand from "./ProductByBrand";
import Products from "./Products";
import SingleProductPage from "./SingleProductPage";
import Wishlish from "./Wishlish";

export default function AllRoutes(){

    // API==https://jsonserver-125f.onrender.com
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<SignIn/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/wishlist" element={<Wishlish/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/:id" element={<SingleProductPage/>}></Route>
    </Routes>
}