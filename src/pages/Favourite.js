import { Flex } from "@chakra-ui/react";
import ContainerBookmark from "../components/ContainerBookmark";

function Favourite() {
  return (
    <Flex
      direction={'row'}
      maxW={'75rem'}
      w={'90%'}
      minW={'fit-content'}
      h={'full'}
      minH={'calc(100vh - 4rem)'}
      mx={'auto'}
      px={3}
      bgColor={'sidebar'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      py={'3rem'}
    >
      <ContainerBookmark />
    </Flex>
  );
}

export default Favourite;
