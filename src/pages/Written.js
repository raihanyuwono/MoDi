import { Flex } from "@chakra-ui/react";
import ContainerWritten from "../components/ContainerWritten";

function Written() {
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
      <ContainerWritten />
    </Flex>
  );
}

export default Written;
