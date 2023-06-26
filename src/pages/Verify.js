import { Box, Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Verify() {
  
  const navigate = useNavigate();
  
  async function verification() {
    try {
      const url = window.location.href.split('/');
      const token = url[url.length - 1];
  
      // console.log("URL", url)
      // console.log("TOKEN", token);
  
      const res = await axios.patch(
        'https://minpro-blog.purwadhikabootcamp.com/api/auth/verify',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data);
    }
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
        minW={"16rem"}
        gap={2}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={"10px"}
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
