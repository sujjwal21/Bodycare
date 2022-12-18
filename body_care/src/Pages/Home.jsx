import React from 'react';
import Carousel from '../Components/Carousels';
import MainFooter from '../Components/MainFooter';
import Navbar from '../Components/Navbar';
import {Flex,Button,Stack,Spacer, Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { GiShoppingBag } from 'react-icons/gi';
import Carosuelnew from '../Components/Carosuelnew';

function Home(props) {
    return (
        <div>
            <Navbar/>
            {/* <Carousel/> */}
            <Carosuelnew/>
            <Stack style={{padding:"20px",marginLeft:"50px"}}>
                <h1 style={{fontSize:"40px"}}>Shop by Category</h1>
                <Flex spacing="250px">
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png" style={{width:"280px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/round_widget_ss_homepage_-_Untitled_Page_%281%29-062906.png" style={{width:"280px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/round_widget_ss_homepage_-_Untitled_Page_%282%29-062926.png" style={{width:"280px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/round_widget_ss_homepage_-_Untitled_Page_%286%29-063207.png" style={{width:"280px"}}/></Link>
                   <Spacer />

                    <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/round_widget_ss_homepage_-_Untitled_Page_%283%29-063011.png" style={{width:"280px"}}/></Link>
                   <Spacer />
                   
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/32/round_widget_ss_homepage_-_Untitled_Page_%285%29-063132.png" style={{width:"280px"}}/></Link>
                   <Spacer />

                </Flex>
                <h1 style={{fontSize:"40px",margin:"20px"}}>Discover Holiday fun</h1>

                {/* carosuel need to be preseny here */}

                <h1 style={{fontSize:"40px",margin:"20px"}}>Trending Offers</h1>

                 <Flex  spacing="250px">
                   <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}><Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-500x500-041753.jpeg" style={{width:"350px"}}/></Link>
                   <h1  style={{fontSize:"20px",margin:"20px"}}>SkinCeuticals Gift</h1>
                   <p>Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</p>
                   <Button marginBottom={"20px"} marginTop={"20px"}>SHOP NOW</Button>
                   </Box >
                   <Spacer />
                   <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                   <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-500x500-041805.jpeg" style={{width:"350px"}}/></Link>
                   <h1  style={{fontSize:"20px",margin:"20px"}}>LAST CHANCE: 20% off SkinMedica + gift</h1>
                   <p>Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</p>
                   <Button marginBottom={"20px"} marginTop={"20px"}>SHOP NOW</Button>
                   </Box>
                   <Spacer />
                   <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                  <Link> <img alt="" src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Obagi.ss-094517.jpg" style={{width:"350px",borderRadius:"50%"}}/></Link>
                  <h1  style={{fontSize:"20px",margin:"20px"}}>Obagi Clinical gift</h1>
                   <p>Receive an Obagi Clinical Vitamin C + Eye Brightener (Worth $8) when you spend $100 or more on the brand.</p>
                   <Button marginBottom={"20px"} marginTop={"20px"}>SHOP NOW</Button>
                   </Box>
                   <Spacer />

                </Flex>

            </Stack >
            <Stack style={{padding:"20px",marginLeft:"50px",marginTop:"30px"}}       >
                <Flex>
                    <img src='https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png' alt='name' width={"150px"} />
                    <Spacer />
                    <img src='https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png' alt='name' width={"150px"} />
                    <Spacer />

                    <img src='https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png' alt='name' width={"150px"} height="30px" />
                    <Spacer />

                    <img src='https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png' alt='name' width={"100px"}  />
                    <Spacer />

                    <img src='https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png' alt='name' width={"100px"}/>
                    <Spacer />

                    <img src='https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png' alt='name' width={"150px"}  />
                    <Spacer />
                </Flex>
                <h1 style={{fontSize:"40px",margin:"80px"}}>What People Are Buying Right Now</h1>
                <Flex>
                    <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg" alt="name" /><br/>
                   <p>SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml</p><br/>
                   <p >$169.00</p>
                   <Button  width={"95%"} bgColor={"#333333"} color={'white'} gap="20px" marginBottom={"20px"} marginTop={"20px"}><GiShoppingBag/> SHOP NOW</Button>
                    </Box>
                    <Spacer />
                     <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/480/480/13973771-1764998807002190.jpg" alt="name" /><br/>
                   <p>Eve Lom Decadent Double Cleanse Ritual Holiday Set 2022 (Worth $235.00)</p><br/>
                   <p >$269.00</p>
                   <Button  width={"95%"} bgColor={"#333333"} color={'white'} gap="20px" marginBottom={"20px"} marginTop={"20px"}><GiShoppingBag/> SHOP NOW</Button>
                    </Box>
                    <Spacer />

                     <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",gap:"13px"}}>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/480/480/12434373-1744821040696653.jpg" alt="name" /><br/>
                   <p>BIOEFFECT EGF Eye Serum 6ml</p><br/>
                   <p >$96.00</p>
                   <Button  width={"95%"} bgColor={"#333333"} color={'white'} gap="20px" marginBottom={"20px"} marginTop={"20px"}><GiShoppingBag/> SHOP NOW</Button>
                    </Box>
                    <Spacer />

                     <Box style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/480/480/12588477-1794776910642146.jpg" alt="name" /><br/>
                   <p>111SKIN Y Theorem Bio Cellulose Facial Mask Single 0.87 oz (Worth $32.00)</p><br/>
                   <p >$16.00</p>
                   <Button width={"95%"} bgColor={"#333333"} color={'white'} gap="20px" marginBottom={"20px"}  marginTop={"20px"}><GiShoppingBag/> SHOP NOW</Button>
                    </Box>
                    <Spacer />
                </Flex>

                <Box margin={"40px"}>
                <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/33/Skinstore_August_Referral_-_Untitled_Page_%281%29-022033.png" alt="banner" />
                </Box>

                <Box marginTop={"80px"}>
                <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg" alt="banner" />
                </Box>

            </Stack>


            <MainFooter/>
        </div>
    );
}

export default Home;