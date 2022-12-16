import React from 'react';
import Carousel from '../Components/Carousels';
import MainFooter from '../Components/MainFooter';
import Navbar from '../Components/Navbar';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Carousel/>


            <MainFooter/>
        </div>
    );
}

export default Home;