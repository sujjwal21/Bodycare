import { useContext } from "react";
import Pagination from "../Components/Pagination";
import { ApiContext } from "../Contexts/ApiContex";
import ProductsByBrand from "./ProductByBrand";
import Loading from "../Components/Loading";
import { Button } from "@chakra-ui/react";

function Dashboard() {
  const {page,setpage,limit,setLimit,total,setTotal,state,setState,order,setOrder}=useContext(ApiContext)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
  
      </div>
      <br />
      <div data-testid ="sort-container">
      <Button data-testid="low-to-high" onClick={()=>setOrder("asc")}  >Sort low to high</Button>
      <Button data-testid="high-to-low"  onClick={()=>setOrder("desc")} >Sort high to low</Button>
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
   
    </div>
  );
}

export default Dashboard;
