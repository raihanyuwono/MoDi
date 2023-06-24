import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  inifinite: true,
  autopaly: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
];

function CarouselNews() {
  const [slider, setSlider] = useState(null);

  return (
    <Box
      w={'calc(100% - 6)'}
      h={'40vh'}
      m={'3'}
      mb={0}
      pos={'relative'}
      bg={'#555555'}
      color="primaryTextIcon"
      borderRadius={'10px'}
      overflow={'hidden'}
    >
      <Box
        pos={'absolute'}
        left={'0.3rem'}
        top={'calc(50% - 3vh)'}
        zIndex={2}
        cursor={'pointer'}
        onClick={() => slider?.slickPrev()}
      >
        <BiChevronLeft fontSize={'6vh'} />
      </Box>
      <Box
        pos={'absolute'}
        right={'0.3rem'}
        top={'calc(50% - 3vh)'}
        zIndex={2}
        cursor={'pointer'}
        onClick={() => slider?.slickNext()}
      >
        <BiChevronRight fontSize={'6vh'} />
      </Box>
      <Slider {...settings}  ref={slider => setSlider(slider)}>
        {cards.map(item => {
          return <Image src={item} />;
        })}
      </Slider>
    </Box>
  );
}

export default CarouselNews;
