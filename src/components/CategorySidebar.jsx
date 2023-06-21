import { Flex, Text } from '@chakra-ui/react';
import SidebarCategoryList from './details/SidebarCategoryList';
import { color } from '../themes/Themes';

const categories = ['Home', 'News', 'Games', 'Sports'];

function CategorySidebar() {
  return (
    <Flex
      id="categories-sidebar"
      minH={'calc(100vh - 4rem)'}
      w={"16rem"}
      gap={15}
      bgColor={color.sidebar}
      direction={'column'}
      alignItems={'center'}
      pt={'2rem'}
      fontFamily={'Fira Code'}
    >
      <Text mb={'1rem'} fontSize={'2xl'} fontWeight={'semibold'}>
        Categories
      </Text>
      <SidebarCategoryList categories={categories} />
    </Flex>
  );
}

export default CategorySidebar;
