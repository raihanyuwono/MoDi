import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { color } from '../../themes/Themes';
import { BsBookmarkPlus } from 'react-icons/bs';
import { HiHeart } from 'react-icons/hi';

function onLike() {
    alert("Like")
}

function onBookmark(){
    alert("Bookmark")
}

function CardArticles({ articles }) {
  return articles.map(item => {
    return (
      <Flex
        direction={'column'}
        bgColor={"card"}
        borderRadius={'8px'}
        overflow={'hidden'}
        boxShadow={'md'}
        transition={'.2s'}
        _hover={{
          transform: 'translate(0, -0.65rem)',
          transition: '.3s',
        }}
      >
        <Box pos={'relative'}>
          <Flex
            direction={'column'}
            pos={'absolute'}
            top={'0.5rem'}
            right={'0.5rem'}
            fontSize={'xl'}
            color={"primaryTextIcon"}
            alignItems={'end'}
            gap={1}
          >
            <Flex gap={1}>
              <Text color={"primaryTextIcon"} fontSize={'md'}>
                {item.likes}
              </Text>
              <HiHeart onClick={onLike} cursor={"pointer"} />
            </Flex>
            <BsBookmarkPlus onClick={onBookmark} cursor={"pointer"} />
          </Flex>
          <Flex
            w={'full'}
            pos={'absolute'}
            bottom={0}
            bgGradient={'linear-gradient(to-t, #000000, #00000011)'}
            alignItems={'center'}
            justifyContent={'center'}
            py={'1.1rem'}
          >
            <Text
              color={"primaryTextIcon"}
              fontSize={'xl'}
              fontWeight={'semibold'}
              fontFamily={"Fira Code"}
              noOfLines={2}
            >
              {item.title}
            </Text>
          </Flex>
          <Image
            w={'full'}
            minH={'4.4rem'}
            alt="Image Error"
            src={item.img}
            objectFit={'cover'}
            objectPosition={'center'}
          />
        </Box>
        <Text
          px={'10px'}
          py={'3px'}
          noOfLines={3}
          textAlign={'justify'}
          fontSize={'md'}
        >
          {item.content}
        </Text>
      </Flex>
    );
  });
}

export default CardArticles;
