import { Flex, Spacer } from '@chakra-ui/react';
import NavLeft from './details/NavLeft';
import NavRight from './details/NavRight';
import Search from './details/Search';

function NavBar({funcSearch}) {
  return (
    <Flex
      w={'full'}
      h={'4rem'}
      zIndex={10}
      px={'1rem'}
      position={'sticky'}
      top={'0px'}
      alignItems={'center'}
      color={"primaryTextIcon"}
      bgColor={"darkPrimary"}
      boxShadow={"xl"}
    >
      <NavLeft />
      <Spacer />
      <Search funcSearch={funcSearch}/>
      <Spacer />
      <NavRight />
    </Flex>
  );
}

export default NavBar;
