import { Box, Flex, Text } from '@chakra-ui/react';

function HeaderCategory({ category }) {
  return (
    <Flex alignItems={'center'} p={5} pb={0}>
      <Box h={'1px'} m={5} bg={"#000000"} flexGrow={1} />
      <Text
        fontSize={'4xl'}
        fontFamily={'JetBrains Mono'}
        fontWeight={'semibold'}
        textTransform={'uppercase'}
      >
        {category}
      </Text>
      <Box h={'1px'} m={5} bg={"#000000"} flexGrow={1} />
    </Flex>
  );
}

export default HeaderCategory;
