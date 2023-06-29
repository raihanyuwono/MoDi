import { Box, Flex, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import ContainerPosts from '../components/ContainerPosts';
import CarouselNews from '../components/CarouselNews';
import HeaderCategory from '../components/details/HeaderCategory';
import { getLatest } from '../api/BlogApi';

function LandingPage({
  postList,
  fetchPopular,
  currentCategory,
  setCurrentCategory,
}) {
  const [latestList, setLatestList] = useState([]);
  const [currentSortPop, setCurrentSortPop] = useState('DESC');

  async function fetchLatest(prop) {
    const data = await getLatest(prop);
    setLatestList(data);
  }

  function onChangeCategory(category) {
    setCurrentCategory(category);
    fetchLatest({ categoryId: category.id > 0 ? category.id : '' });
    fetchPopular({ categoryId: category.id > 0 ? category.id : '' });
    setCurrentSortPop('DESC');
  }
  
  function onSortPop(){
    const sortType = document.getElementById('sort-popular').value;
    setCurrentSortPop(sortType);
    fetchPopular({ sortType });
  }

  useEffect(() => {
    fetchLatest({});
  }, []);

  return (
    <Flex direction={'row'} w={'full'}>
      <CategorySidebar onChangeCategory={onChangeCategory} />
      <Flex direction={'column'} w={'calc(100% - 16rem)'} gap={5}>
        <HeaderCategory category={currentCategory.name} />
        
        <Flex direction={'row'} px={5} alignItems={'center'} gap={2}>
          <Box bgColor={'#000000'} w={2} h={'px'} flexWrap={'wrap'} />
          <Text fontSize={'1.5rem'}>Latest</Text>
          <Box bgColor={'#000000'} flexGrow={1} h={'px'} flexWrap={'wrap'} />
        </Flex>
        <CarouselNews latestList={latestList} />

        <Flex direction={'row'} px={5} alignItems={'center'} gap={2}>
          <Box bgColor={'#000000'} w={2} h={'px'} flexWrap={'wrap'} />
          <Text fontSize={'1.5rem'}>Most Popular</Text>
          <Box bgColor={'#000000'} flexGrow={1} h={'px'} flexWrap={'wrap'} />
          <Select
            id="sort-popular"
            h={'2rem'}
            w={'5rem'}
            variant={'outline'}
            fontSize={'sm'}
            onChange={onSortPop}
            value={currentSortPop}
          >
            <option value={'DESC'}>Z-A</option>
            <option value={'ASC'}>A-Z</option>
          </Select>
        </Flex>
        <ContainerPosts postList={postList} />
      </Flex>
    </Flex>
  );
}

export default LandingPage;
