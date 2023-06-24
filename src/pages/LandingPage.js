import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CategorySidebar from '../components/CategorySidebar';
import ContainerPosts from '../components/ContainerPosts';
import CarouselNews from '../components/CarouselNews';
import HeaderCategory from '../components/details/HeaderCategory';

function LandingPage() {
  const [postList, setPostList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({
    id: 0,
    name: 'Home',
  });

  async function fetchPost({ categoryId = 0, sortType = 'DESC', page = 1 }) {
    try {
      const res = await axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${
          categoryId == 0 ? '' : categoryId
        }&sort=${sortType}&page=${page}`
      );
      const dataList = res.data.result;
      setPostList(dataList);
    } catch (error) {
      console.log('fetchPost', error);
    }
  }

  function onChangeCategory(category) {
    setCurrentCategory(category);
    fetchPost({ categoryId: category.id });
  }

  useEffect(() => {
    fetchPost({});
  }, [setPostList]);

  return (
    <Flex direction={'row'} w={'full'}>
      <CategorySidebar onChangeCategory={onChangeCategory} />
      <Flex direction={'column'} w={'calc(100% - 16rem)'}>
        <HeaderCategory category={currentCategory.name} />
        <CarouselNews />
        <ContainerPosts postList={postList} />
      </Flex>
    </Flex>
  );
}

export default LandingPage;
