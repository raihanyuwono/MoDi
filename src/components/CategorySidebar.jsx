import { Flex, Text } from '@chakra-ui/react';
import SidebarCategoryList from './details/SidebarCategoryList';

const categories = ['Home', 'News', 'Games', 'Movies', 'Sports', 'Hobby'];

function CategorySidebar() {
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
      top={"4rem"}
      bottom={0}
      overflowY={'scroll'}
      // textOverflow={'hidden'}
    >
      <Text
        // mb={'1rem'}
        py={"2rem"}
        w={"full"}
        fontSize={'2xl'}
        fontWeight={'semibold'}
        pos={'sticky'}
        bgColor={"sidebar"}
        top={0}
        zIndex={1}
        textAlign={"center"}
      >
        Categories
      </Text>
      <SidebarCategoryList categories={categories} />
    </Flex>
  );
}

export default CategorySidebar;
