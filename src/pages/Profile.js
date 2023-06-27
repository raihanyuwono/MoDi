import { Box, Divider, Flex } from '@chakra-ui/react';
import ContainerBookmark from '../components/ContainerBookmark';
import ContainerProfile from '../components/ContainerProfile';

function Profile() {
  return (
    <>
      <Flex
        direction={'row'}
        maxW={'75rem'}
        w={"90%"}
        h={'full'}
        minH={"calc(100vh - 4rem)"}
        mx={'auto'}
        bgColor={'sidebar'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ContainerProfile />
      </Flex>
    </>
  );
}

export default Profile;
