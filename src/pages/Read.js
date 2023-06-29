import ContainerArticle from "../components/ContainerArticle";

function Read({ item }) {
  return (
    <Box
      bgColor={'sidebar'}
      w={'90%'}
      maxW={'65rem'}
      h={'full'}
      mx={'auto'}
      px={12}
      py={8}
      boxShadow={'dark-lg'}
    >
      <ContainerArticle />
    </Box>
  );
}

export default Read;
