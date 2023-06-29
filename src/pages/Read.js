import { Box } from "@chakra-ui/react";
import ContainerArticle from "../components/ContainerArticle";

function Read() {
  const item = JSON.parse(sessionStorage.getItem('read'));

  return (
    <Box
      bgColor={'sidebar'}
      w={'90%'}
      maxW={'65rem'}
      minH={'calc(100vh - 4rem)'}
      mx={'auto'}
      px={12}
      py={8}
      boxShadow={'dark-lg'}
    >
      <ContainerArticle item={item}/>
    </Box>
  );
}

export default Read;
