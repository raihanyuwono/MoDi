import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { getImage } from '../../api/UserApi';
import { useNavigate } from 'react-router-dom';

function CardCarousel({ item }) {

  const navigate = useNavigate();
  
  function toRead(item){
    sessionStorage.setItem('read', JSON.stringify(item));
    navigate('/read');
  }

  return (
    <Flex
      // Container
      h={'40vh'}
      direction={'column'}
      borderRadius={'8px'}
      overflow={'hidden'}
      role="group"
      cursor={'pointer'}
      onClick={() => toRead(item)}
    >
      <Box pos={'relative'} h={'full'}>
        <Box
          // Upper Menu
          w={'full'}
          h={'40%'}
          pos={'absolute'}
          top={0}
          bgGradient={'linear-gradient(to-b, #000000DF, #00000000)'}
          zIndex={2}
          _groupHover={{ zIndex: 2 }}
        >
          <Text
            color={'primaryTextIcon'}
            fontSize={'2xl'}
            fontWeight={'semibold'}
            fontFamily={'Fira Code'}
            noOfLines={1}
            textAlign={'center'}
            mt={2}
          >
            {item?.title}
          </Text>
        </Box>

        <Flex
          // Bottom Menu
          w={'full'}
          h={'40%'}
          px={'1rem'}
          gap={10}
          direction={'row'}
          pos={'absolute'}
          bottom={0}
          bgGradient={'linear-gradient(to-t, #000000DF, #00000000)'}
          alignItems={'end'}
          justifyContent={'center'}
          py={'1.1rem'}
          zIndex={1}
          _groupHover={{ zIndex: 1 }}
        >
          <Text
            // 2 lines of content
            flexGrow={1}
            noOfLines={2}
            textAlign={'justify'}
            fontSize={'md'}
            color={'primaryTextIcon'}
          >
            {item?.content}
          </Text>
          <HStack>
            <Avatar size={'md'} src={getImage(item.User.imgProfile)} />
            <VStack>
              <Text color={'primaryTextIcon'} fontSize={'0.9rem'}>
                {item.User.username}
              </Text>
              <Text color={'primaryTextIcon'} fontSize={'0.73rem'}>
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </VStack>
          </HStack>
        </Flex>

        <Image
          // Image Content
          w={'full'}
          h={'full'}
          alt="Image Error"
          src={getImage(item.imageURL)}
          objectFit={'cover'}
          objectPosition={'center'}
          transition={'.2s'}
          zIndex={0}
          _groupHover={{
            transform: 'scale(1.2)',
            transition: '.7s',
            zIndex: 0,
          }}
        />
      </Box>
    </Flex>
  );
}

export default CardCarousel;
