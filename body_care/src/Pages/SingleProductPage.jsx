import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import ProductTemplate from './ProductTemplet';
import SingleProductTemplate from './SingleProductTemplate';
import Navbar from '../Components/Navbar';
import MainFooter from '../Components/MainFooter';
import { ApiContext } from '../Contexts/ApiContex';

function SingleProductPage() {
    const {id}=useParams()
    const {url}=useContext(ApiContext)
 const [data,setData]=useState([])
      useEffect(()=>{
        axios.get(`${url}?id=${id}`)
        .then(res=>{
            setData(res.data)
            })
       .catch(err=>console.log(err))
    },[id])

       console.log( data.api_featured_image,data)
    //    const {image,brand,description,category,price,type}=data
    return (
        <div>
            <Navbar/>
             {data&&data?.map((el)=><SingleProductTemplate image={el.api_featured_image} brand={el.brand} description={el.description} category={el.category} price={el.price} type={el.type}
             key={el.id} />)}
             <MainFooter/>
        </div>
    );
}

export default SingleProductPage;