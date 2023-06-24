import { Flex } from '@chakra-ui/react';
import CategorySidebar from '../components/CategorySidebar';
import ContainerPosts from '../components/ContainerPosts';
import CarouselNews from '../components/CarouselNews';

function LandingPage() {
  return (
    <Flex direction={'row'} w={'full'}>
      <CategorySidebar />
      <Flex direction={'column'} w={'calc(100% - 16rem)'}>
        <CarouselNews />
        <ContainerPosts />
      </Flex>
    </Flex>
  );
}

export default LandingPage;
