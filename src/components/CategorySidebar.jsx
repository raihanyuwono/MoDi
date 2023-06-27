import { Flex, Text } from '@chakra-ui/react';
import SidebarCategoryList from './details/SidebarCategoryList';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../storage/BlogReducer';

function CategorySidebar({ onChangeCategory }) {
  
  const categories = useSelector((state) => state.blog.categories);
  const dispatch = useDispatch();

  async function fetchCategories() {
    try {
      const res = await axios.get(
        'https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory'
      );
      dispatch(setCategory([
        { id: 0, name: 'Popular' }, 
        ...res.data,
      ]))
      console.log("Categories")
    } catch (error) {
      console.log('fetchCetegories()', error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Flex
      id="categories-sidebar"
      h={'calc(100vh - 4rem)'}
      w={'16rem'}
      gap={15}
      bgColor={'sidebar'}
      direction={'column'}
      alignItems={'center'}
      fontFamily={'Fira Code'}
      boxShadow={'xl'}
      zIndex={1}
      pos={'sticky'}
      top={'4rem'}
      bottom={0}
      overflowY={'scroll'}
    >
      <Text
        py={'2rem'}
        w={'full'}
        fontSize={'2xl'}
        fontWeight={'semibold'}
        pos={'sticky'}
        bgColor={'sidebar'}
        top={0}
        zIndex={1}
        textAlign={'center'}
      >
        Categories
      </Text>
      <SidebarCategoryList
        categories={categories}
        onChangeCategory={onChangeCategory}
      />
    </Flex>
  );
}

export default CategorySidebar;
