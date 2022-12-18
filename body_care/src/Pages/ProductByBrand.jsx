import React, { useContext, useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import ProductTemplate from './ProductTemplet';
import { Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../Contexts/ApiContex';

function ProductsByBrand(   ) {
  const {page,setpage,limit,setLimit,total,setTotal,state,setState,order,setOrder}=useContext(ApiContext)
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonserver-125f.onrender.com/products?page=${page}&limit=${limit}&orderBy=${order}`)
        .then(res=>{
            setData(res.data)
            setTotal(res.data.length)})
       .catch(err=>console.log(err))
    },[page,limit,order])
    console.log(data)
    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {/* <h1>hello</h1> */}
            {data&&data?.map((el)=><Link to={`/product/${el.id}`} key={el.id}><ProductTemplate image={el.api_featured_image} brand={el.brand} description={el.description} category={el.category} price={el.price} type={el.type}
             key={el.id} /></Link>)}
            </Grid>
        </div>
    );
}
export default ProductsByBrand;