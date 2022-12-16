import React from 'react';
import Carousel from '../Components/Carousels';
import MainFooter from '../Components/MainFooter';
import Navbar from '../Components/Navbar';
import {Flex,Button,Stack,Spacer} from "@chakra-ui/react"
import {Link} from "react-router-dom"

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Stack style={{padding:"20px"}}>
                <h1 style={{fontSize:"40px"}}>Shop by Category</h1>
                <Flex spacing="250px">
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png" style={{width:"250px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png" style={{width:"250px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png" style={{width:"250px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png" style={{width:"250px"}}/></Link>
                   <Spacer />

                </Flex>
            </Stack>


            <MainFooter/>
        </div>
    );
}

export default Home;