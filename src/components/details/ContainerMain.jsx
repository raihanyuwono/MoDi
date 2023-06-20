import { Box } from '@chakra-ui/react';
import ArticleButtons from './ArticleButtons';

function ContainerMain() {
  return (
    <>
      <Box w={"85%"} minH={'calc(100vh - 4rem)'} mx={'auto'} bgColor={'#CCCCCC'} boxShadow={"dark-lg"}>
        CONTAINER
      </Box>
      <ArticleButtons/>
    </>
  );
}

export default ContainerMain;
