import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function SingleProductTemplate({image,brand,description,category,price,type,id}) {
   const [liked, setLiked] = useState(false);
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        // maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        // height={"650px"}
        >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'330px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            // backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={430}
            width={482}
            objectFit={'cover'}
            src={image}
            marginLeft={"30vw"}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text marginTop={"60px"} color={'gray.500'} fontSize={'20px'} textTransform={'uppercase'}>
            Categorey:{category} 
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          Brand:{brand}
          </Heading>
          <Text  >Description:--{description}</Text>
          <p>Type:Beauty Coamatic{type}</p>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ₹{11+(+price)}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹{15+(+price)*5}
            </Text>
          </Stack>
        </Stack>
         <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
           <Link to={`/dashboard/${id}`} key={id}> <Button>Add to cart</Button></Link>
          </Flex>
      </Box>
    </Center>
  );
}