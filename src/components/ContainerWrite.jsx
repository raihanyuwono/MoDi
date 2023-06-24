import { Box } from '@chakra-ui/react';
import WriteForm from './details/WriteForm';

function ContainerWrite() {
  return (
    <Box
      bgColor={'sidebar'}
      w={'90%'}
      maxW={"75rem"}
      minH={'calc(100vh - 4rem)'}
      mx={'auto'}
      px={12}
      py={8}
      boxShadow={"dark-lg"}
    >
        <WriteForm />
    </Box>
  );
}

export default ContainerWrite;
