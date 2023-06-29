import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';
import CardCarousel from './details/CardCarousel';

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  inifinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CarouselNews({ latestList }) {
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
        bgColor={'#00000088'}
        borderRadius={'50%'}
        zIndex={2}
        cursor={'pointer'}
        onClick={() => slider?.slickPrev()}
        _hover={{
          bgColor: '#000000CC',
        }}
      >
        <BiChevronLeft fontSize={'6vh'} />
      </Box>
      <Box
        pos={'absolute'}
        right={'0.3rem'}
        top={'calc(50% - 3vh)'}
        bgColor={'#00000088'}
        borderRadius={'50%'}
        zIndex={2}
        cursor={'pointer'}
        onClick={() => slider?.slickNext()}
        _hover={{
          bgColor: '#000000CC',
        }}
      >
        <BiChevronRight fontSize={'6vh'} />
      </Box>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {/* {cards.map(item => {
          return <Image src={item} />;
        })} */}
        {latestList.map(item => (
          <CardCarousel item={item} />
        ))}
      </Slider>
    </Box>
  );
}

export default CarouselNews;
