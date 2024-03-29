import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots:true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://static.thcdn.com/images/medium/original/widgets/121-us/00/original-Shot6-580x384-095500.jpeg',
    'https://static.thcdn.com/images/medium/original/widgets/121-us/50/original-1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-2-580x384.jpeg-050550.jpg',
    'https://static.thcdn.com/images/medium/original/widgets/121-us/04/New_Project_%287%29-090104.jpg',
    'https://static.thcdn.com/images/medium/original/widgets/121-us/00/original-Shot6-580x384-095500.jpeg',
    'https://static.thcdn.com/images/medium/original/widgets/121-us/50/original-1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-2-580x384.jpeg-050550.jpg'
  ];

  return (
    <Box
      position={'relative'}
      height={'lg'}
      width={'90vw'}
      overflow={'hidden'}
      marginLeft={"5vw"}
      marginTop="20px"
      marginBottom={'40px'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme='whatsapp'
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme='whatsapp'
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box  
            key={index}
            height={'xl'}
            // width={'100px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}