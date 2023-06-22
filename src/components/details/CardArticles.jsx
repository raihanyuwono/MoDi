import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
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
            h={"full"}
            pos={'absolute'}
            bottom={0}
            bgGradient={'linear-gradient(to-t, #000000DF, #00000044,#00000000)'}
            alignItems={'end'}
            justifyContent={'center'}
            py={'1.1rem'}
          >
            <Text
              color={"primaryTextIcon"}
              fontSize={'xl'}
              fontWeight={'semibold'}
              fontFamily={"Fira Code"}
              noOfLines={2}
              textAlign={"center"}
            >
              {item?.title}
            </Text>
          </Flex>

          <Image
            w={'full'}
            h={"32vh"}
            alt="Image Error"
            src={`https://minpro-blog.purwadhikabootcamp.com/${item?.imageURL}`}
            objectFit={'cover'}
            objectPosition={'center'}
          />
        </Box>
        <Text
          px={'10px'}
          py={'3px'}
          h={"4.8rem"}
          noOfLines={3}
          textAlign={'justify'}
          fontSize={'md'}
        >
          {item?.content}
        </Text>
      </Flex>
    );
  });
}

export default CardArticles;
