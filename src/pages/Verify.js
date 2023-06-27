import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { verify } from '../api/UserApi';

function Verify() {
  const navigate = useNavigate();
  const toast = useToast();

  async function verification() {
    const url = window.location.href.split('/');
    const token = url[url.length - 1];

    const status = await verify(toast, token);
    status && navigate('/');
  }

  return (
    <Flex
      w={'full'}
      h={'calc(100vh - 4rem)'}
      bgColor={'lightPrimary'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex
        direction={'column'}
        bgColor={'sidebar'}
        h={'35vh'}
        w={'30vw'}
        minW={'16rem'}
        gap={2}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'10px'}
      >
        <Text textAlign={'center'}>
          Click button on the bottom to verify your account
        </Text>
        <Button p={2} onClick={verification}>
          Verify
        </Button>
      </Flex>
    </Flex>
  );
}

export default Verify;
