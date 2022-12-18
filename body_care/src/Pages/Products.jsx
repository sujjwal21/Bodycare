import React, { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import ProductTemplate from './ProductTemplet';
import { Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Products(props) {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        .then(res=>setData(res.data))
       .catch(err=>console.log(err))
    },[])
    console.log(data)
    // image,branddescription,category,price,type,id
    return (
        <div>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {/* <h1>hello</h1> */}
            {data?.map((el)=><Link to={`/product/${el.id}`} key={el.id}><ProductTemplate image={el.api_featured_image} brand={el.brand} description={el.description} category={el.category} price={el.price} type={el.type} key={el.id} /></Link>)}
            </Grid>
        </div>
    );
}

export default Products;