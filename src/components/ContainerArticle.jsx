import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react';
import { getImage } from '../api/UserApi';
import CardTag from './details/CardTag';
import { HiHeart } from 'react-icons/hi';
import { likeBlog } from '../api/BlogApi';
import Toast from './Toast';
import { useNavigate } from 'react-router-dom';

function ContainerArticle({ item }) {
  const toast = useToast();
  const navigate = useNavigate();

  function onLike() {
    const token = localStorage.getItem('token');
    if (!token) {
      Toast(toast, {
        title: 'Please login first',
        status: '4',
      });
      return setTimeout(() => navigate('/'), 500);
    }
    likeBlog(toast, token, item.id);
  }

  return (
    <Flex pos={'relative'} direction={'column'} gap={6}>
      <Box pos={'relative'} borderRadius={'10px'} overflow={'hidden'}>
        <Flex
          pos={'absolute'}
          w={'full'}
          h={'50%'}
          px={8}
          pb={5}
          bottom={0}
          boxShadow={'lg'}
          justifyContent={'center'}
          alignItems={'end'}
          bgGradient={'linear-gradient(to-t, #000000, #00000000)'}
        >
          <Text
            color={'primaryTextIcon'}
            textAlign={'center'}
            fontWeight={'semibold'}
            fontSize={'2xl'}
            fontFamily={'Fira Code'}
          >
            {item?.title}
          </Text>
        </Flex>
        <Image
          bgColor={'#000000'}
          w={'full'}
          maxH={'50vh'}
          src={getImage(item?.imageURL)}
          objectFit={'cover'}
          objectPosition={'center'}
        />
      </Box>

      <Flex alignItems={'center'} gap={2}>
        <HStack>
          <Avatar src={getImage(item.User.imgProfile)} />
          <Text fontSize={'1.2rem'}>{item.User.username}</Text>
        </HStack>
        <Spacer />
        <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
        <HiHeart
          fontSize={'2rem'}
          color="#e31b23"
          onClick={onLike}
          cursor={'pointer'}
        />
      </Flex>

      <Text textAlign={'justify'}>{item.content}</Text>

      <Flex gap={1} alignItems={'center'}>
        <Text>Keywords : </Text>
        <CardTag tags={item.Blog_Keywords[0].Keyword.name.split(' ')} />
      </Flex>
    </Flex>
  );
}

export default ContainerArticle;
