import {
  Flex,
  GridItem,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';

function CardBookmark({ items, dislike }) {

    
    return items.map(item => (
    <GridItem>
      <Flex
        h={'8rem'}
        p={4}
        bgColor={'lightPrimary'}
        gap={2}
        alignItems={'center'}
        justifyItems={'center'}
        borderRadius={'10px'}
        boxShadow={'xl'}
        transition={'.2s'}
        _hover={{
            transform: 'translate(0, -0.65rem)',
            transition: '.3s',
          }}
      >
        <Flex direction={'column'}
          w={'full'}
          h={'full'}
          pos={'relative'}
          alignItems={'start'}
        >
          <Text noOfLines={1} textAlign={'center'} fontFamily={'Fira Code'}>
            {item.Blog.title}
          </Text>
          <Spacer/>
          <Text textAlign={'justify'} noOfLines={2}>
            {item.Blog.content}
          </Text>
        </Flex>
        <Spacer />
        <FaTrashAlt fontSize={'1.5rem'} cursor={'pointer'} onClick={() => dislike(item.BlogId)} />
      </Flex>
    </GridItem>
  ));
}

export default CardBookmark;
