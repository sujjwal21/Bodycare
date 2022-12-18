import { useContext } from "react";
import Pagination from "../Components/Pagination";
import { ApiContext } from "../Contexts/ApiContex";
import ProductsByBrand from "./ProductByBrand";
import Loading from "../Components/Loading";
import { Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import MainFooter from "../Components/MainFooter";

function Dashboard() {
  const {page,setOrder}=useContext(ApiContext)
  return (
    <div>
        <Navbar/>
      {/* <h3>Dashboard</h3> */}
      <div>
  
      </div>
      <br />
      <div data-testid ="sort-container">
      <Button  onClick={()=>setOrder("asc")}  >Sort low to high</Button>
      <Button  onClick={()=>setOrder("desc")} >Sort high to low</Button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Loader /> */}
        {page?<ProductsByBrand/>:<Loading/>}
        {/* Product Listing, remember to show loading indicator when API is loading */}
        {/* <ProductList/> */}
      </div>
    <MainFooter/>
    </div>
  );
}

export default Dashboard;
