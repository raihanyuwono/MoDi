import { Flex } from '@chakra-ui/react';
import ContainerProfile from '../components/ContainerProfile';

function Profile() {
  return (
    <>
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
        alignItems={'center'}
      >
        <ContainerProfile />
      </Flex>
    </>
  );
}

export default Profile;
