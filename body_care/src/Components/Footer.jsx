import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  VisuallyHidden
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children } ) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
     {/* <hr color='black'  />   */}
            <hr color='black'/>

      <Stack marginBottom={"50px"} marginTop={"50px"} marginLeft={"40vw"} direction={'row'} spacing={201}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
            <hr style={{color:"black"}}/>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={10}>
          <Stack spacing={20}>
            

            <Stack align={'flex-start'}>
              <hr style={{border:"1px solid black",width:"250px"}}/>
            <ListHeader>Help & Information</ListHeader>
            <Link href={'#'}>Coustomer Service</Link>
            <Link href={'#'}>Delivery Information</Link>
            <Link href={'#'}>Returns & Refund</Link>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Track my order</Link>
            <Link href={'#'}>Accessibility</Link>
            <Link href={'#'}>Cookie Setting</Link>
          </Stack>
            
            {/* <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Chakra Templates. All rights reserved
            </Text> */}
          </Stack>
          
          <Stack align={'flex-start'}>
            <hr style={{border:"1px solid black",width:"150px"}}/>

            <ListHeader>About SkinStore</ListHeader>
            <Link href={'#'}>Key Workers Discount</Link>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Affiliate Program</Link>
            <Link href={'#'}>Brand Directory</Link>
            <Link href={'#'}>Coupon Code</Link>
            <Link href={'#'}>Refer a Friend</Link>
            <Link href={'#'}>Student Discount</Link>
            <Link href={'#'}>Join Body care Expert</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <hr style={{border:"1px solid black" ,width:"150px"}}/>

            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookie Information</Link>
            <Link href={'#'}>Privacy Policye</Link>
            <Link href={'#'}>Terms & Conditions</Link>
            
            <Link href={'#'}>Modern Slavery Statement</Link>          
          </Stack>
          <Stack align={'flex-start'}>
            <hr style={{border:"1px solid black",width:"180px"}}/>

            <ListHeader>How To Contact Us</ListHeader>
            <Link href={'#'}>Message Us</Link>
            <Link href={'#'}>Free Beauty Consultations</Link>        
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}