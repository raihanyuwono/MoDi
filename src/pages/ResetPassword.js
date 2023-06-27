import { Button, Flex, FormControl, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { resetPassword as resetPass } from '../api/UserApi';
import CustomInputForm from '../components/details/CustomInputForm';
import { FiUnlock } from 'react-icons/fi';
import { useState } from 'react';

function ResetPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  async function resetPassword() {
    const url = window.location.href.split('/');
    const token = url[url.length - 1];

    const status = await resetPass(toast, {
      token,
      password: document.getElementById('reset-password').value,
      confirmPassword: document.getElementById('reset-confirm-password').value,
    });
    status && navigate('/');
  }

  return (
    <Flex
      w={'full'}
      h={'calc(100vh - 4rem)'}
      bgColor={'lightPrimary'}
      alignItems={'center'}
      justifyContent={'center'}
      fontFamily={"Fira Code"}
    >
      <Flex
        direction={'column'}
        bgColor={'#ffffff'}
        minH={'40vh'}
        w={'30rem'}
        minW={'16rem'}
        px={4}
        py={6}
        gap={4}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'10px'}
      >
        <Text mb={4} fontSize={'2xl'} fontWeight={'semibold'}>
          Reset Password
        </Text>

        <CustomInputForm
          id="reset-password"
          type="password"
          placeholder="New Password"
          pass={showPass}
          onPass={() => setShowPass(!showPass)}
          icon={<FiUnlock color={'primaryTextIcon'} />}
        />
        <CustomInputForm
          id="reset-confirm-password"
          type="password"
          placeholder="Re-type New Password"
          pass={showPassConfirm}
          onPass={() => setShowPassConfirm(!showPassConfirm)}
          icon={<FiUnlock color={'primaryTextIcon'} />}
        />
        <Button
          w={'full'}
          h={'auto'}
          p={3}
          color={'primaryTextIcon'}
          bgColor={'login'}
          _hover={{bgColor:"loginSecondary"}}
          onClick={resetPassword}
        >
          Reset Password
        </Button>
      </Flex>
    </Flex>
  );
}

export default ResetPassword;
