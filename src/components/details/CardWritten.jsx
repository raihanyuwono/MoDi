import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function CardWritten({ items, delBlog }) {
  const navigate = useNavigate();

  function toRead(item) {
    sessionStorage.setItem('read', JSON.stringify(item));
    navigate('/read');
  }

  return items.map(item => {
    return (
      <Flex
        // Container
        direction={'column'}
        bgColor={'card'}
        borderRadius={'8px'}
        overflow={'hidden'}
        boxShadow={'md'}
        transition={'.2s'}
        onClick={() => toRead(item)}
        cursor={'pointer'}
        _hover={{
          transform: 'translate(0, -0.65rem)',
          transition: '.3s',
        }}
      >
        <Box
          // Upper Menu
          pos={'relative'}
        >
          <Box
            w={'full'}
            h={'40%'}
            pos={'absolute'}
            top={0}
            bgGradient={'linear-gradient(to-b, #000000DF, #00000000)'}
          />

          <Flex
            // Bottom Menu
            w={'full'}
            h={'40%'}
            pos={'absolute'}
            bottom={0}
            bgGradient={'linear-gradient(to-t, #000000DF, #00000000)'}
            alignItems={'end'}
            justifyContent={'center'}
            py={'1.1rem'}
          >
            <Text
              color={'primaryTextIcon'}
              fontSize={'xl'}
              fontWeight={'semibold'}
              fontFamily={'Fira Code'}
              noOfLines={2}
              textAlign={'center'}
            >
              {item?.title}
            </Text>
          </Flex>

          <Image
            // Image Content
            w={'full'}
            h={'32vh'}
            alt="Image Error"
            src={`https://minpro-blog.purwadhikabootcamp.com/${item?.imageURL}`}
            objectFit={'cover'}
            objectPosition={'center'}
          />
        </Box>

        <Grid
          templateColumns={'6fr 1fr'}
          gap={4}
          alignItems={'center'}
          px={'10px'}
          py={'3px'}
        >
          <Text
            // 3 lines of content
            h={'4.8rem'}
            noOfLines={3}
            textAlign={'justify'}
            fontSize={'md'}
          >
            {item?.content}
          </Text>

          <FaTrashAlt
            fontSize={'1.5rem'}
            cursor={'pointer'}
            onClick={event => delBlog(item.id, event)}
          />
        </Grid>
      </Flex>
    );
  });
}

export default CardWritten;
