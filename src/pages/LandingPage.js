import { Flex } from '@chakra-ui/react';
import CategorySidebar from '../components/CategorySidebar';
import ContainerPosts from '../components/ContainerPosts';
import CarouselNews from '../components/CarouselNews';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LandingPage() {
  const [postList, setPostList] = useState([]);

  async function fetchPost({ categoryId = '1', sortType = 'DESC', page = 1 }) {
    try {
      const res = await axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${categoryId}&sort=${sortType}&page=${page}`
      );
      const dataList = res.data.result;
      setPostList(dataList);
    } catch (error) {
      console.log('fetchPost', error);
    }
  }

  function onChangeCategory(categoryId) {
    fetchPost({categoryId});
  }

  useEffect(() => {
    fetchPost({});
  }, [setPostList]);

  return (
    <Flex direction={'row'} w={'full'}>
      <CategorySidebar onChangeCategory={onChangeCategory}/>
      <Flex direction={'column'} w={'calc(100% - 16rem)'}>
        <CarouselNews />
        <ContainerPosts postList={postList} />
      </Flex>
    </Flex>
  );
}

export default LandingPage;
