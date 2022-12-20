import React from 'react';
import Navbar from '../Components/Navbar';
import ProductTemplate from './ProductTemplet';
import MainFooter from '../Components/MainFooter';
import { Grid } from '@chakra-ui/react';

function Wishlish(props) {
    let data=JSON.parse(localStorage.getItem("cart"))
    return (
        <div>
            <Navbar/>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {data.map(el=><ProductTemplate image={el.api_featured_image} brand={el.brand} description={el.description} category={el.category} price={el.price} type={el.type} id={el.id}/>)}</Grid>
            <MainFooter/>
        </div>
    );
}

export default Wishlish;