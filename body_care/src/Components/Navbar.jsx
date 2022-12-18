import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';
import logo from "../Images/1.png"
import axios from 'axios';
// import SignUp from './Signup';
// import SignIn from './SignIn';
import { useState,useEffect, useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ProductTemplate from '../Pages/ProductTemplet';
import { ApiContext } from '../Contexts/ApiContex';



export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    // const [signin,setSignin]=useState(false)
    // const [signup,setSignup]=useState(false)
    const {setDetails,url,search,setSearch}=useContext(ApiContext)

    
    // const [data,setData]=useState([])

// console.log(data)

//  const handelSignIn=()=>{
//     console.log("hello ")
//     return <Navigate to={"/login"}/>
//  }

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justify={"space-between"}>
                    
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex >
                    
                        <RouterLink to={"/"}><img src={logo} alt="logo" width={"150px"}  /></RouterLink>
                  
                </Flex>
                <Flex style={{border:"1px solid" , padding:"10px" ,height:"50px" ,justifyContent:"space-between" ,alignItems:"center" ,width:"400px"}}>

                 <input type={"text"} placeholder={"Search by(lipstick,eyeliner)"} style={{outline:"none"}} onChange={(e)=>setSearch(e.target.value)} />
                 <RouterLink to="/products"><Button>Search</Button></RouterLink>
                 

{/* image={el.api_featured_image} brand={el.brand} description={el.description} category={el.category} price={el.price} type={el.type}
             key={el.id */}
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    {/* <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                            Account
                            {/* <Button onClick={()=>setSignin(!signin)}>Sign in</Button>
                        {signin?<SignIn/>:""} */}
                    {/* </Button> */}
                   <Button> <RouterLink to={"/login"}>SignUp</RouterLink></Button>
                   <Button> <RouterLink to={"/register"}>SignIn</RouterLink></Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                            Cart
                         {/* <Button onClick={()=>setSignup(!signup)}>Sign in</Button>
                        {signup?<SignUp/>:""} */}
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
            <Box style={{display:"flex",justifyContent:"center",alignItems:"center", height:"40px"}}  > <DesktopNav /></Box>
            
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={8}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blue.300' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Brands',
        children: [
            {
                label: 'Populer Category',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'By Gift Idea',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
             {
                label: 'By Price',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'By Category',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
//     {
//         label: 'Holiday Gifts',
//         children: [
//             {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//             {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Sale',
//         children: [ {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Skincare',
//         children: [
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Hair',
//         children: [
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Makeup',
//         children: [
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Bath & Body',
//         children: [
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Fragrance',
//         children: [
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Self-Care',
//         children: [
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Tolls',
//         children: [
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'New Trending ',
//         children: [
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Building Routine',
//         children: [
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//         {
//         label: 'Blog',
//         children: [
//             {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Gift Idea',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'By Price',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'By Category',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//              {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//              {
//                 label: 'Populer Category',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//         ],
//     },
];