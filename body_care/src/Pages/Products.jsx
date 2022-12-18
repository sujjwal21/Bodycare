import React, { useContext, useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import ProductTemplate from './ProductTemplet';
import { Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../Contexts/ApiContex';
import Navbar from '../Components/Navbar';
import MainFooter from '../Components/MainFooter';

function Products(props) {
    const {details}=useContext(ApiContext)
    const {setDetails,url,search,setSearch}=useContext(ApiContext)

        useEffect(()=>{
        axios.get(`${url}?product_type=${search}`)
        .then(res=>setDetails(res.data))
       .catch(err=>console.log(err))
    },[search])
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    //     .then(res=>setData(res.data))
    //    .catch(err=>console.log(err))
    // },[])
    // console.log(data)
    // image,branddescription,category,price,type,id
    return (
        <div>
            <Navbar/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {/* <h1>hello</h1> */}
            {details?.map((el)=><ProductTemplate image={el.api_featured_image} brand={el.brand} description={el.description} category={el.category} price={el.price} type={el.type} key={el.id} />)}
            </Grid>
            <MainFooter/>
        </div>
    );
}

export default Products;