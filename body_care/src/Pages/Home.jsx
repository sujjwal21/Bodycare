import React from 'react';
import Carousel from '../Components/Carousels';
import Navbar from '../Components/Navbar';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Carousel/>
        </div>
    );
}

export default Home;