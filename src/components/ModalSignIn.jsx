import {
  Button,
  FormControl,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import LoginForm from './details/LoginForm';
import SignUpForm from './details/SignUpForm';
import { useState } from 'react';
import {color} from "../themes/Themes";

function ModalSignIn({ isOpen, onClose}) {
  const [wantLogin, setWantLogin] = useState(true);
  const [btnText, setBtnText] = useState('Sign In');
  const [memberText, setMemberText] = useState('Sign Up');

  function onSignIn() {
    alert('Sign In');
  }

  function onSignUp() {
    alert('Sign Up');
  }

  function onWantSignIn() {
    setWantLogin(true);
    setBtnText('Sign In');
    setMemberText('Sign Up');
  }

  function onWantSignUp() {
    setWantLogin(false);
    setBtnText('Sign Up');
    setMemberText('Sign In');
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay backdropFilter={'blur(2px)'} />
      <ModalContent m={'auto'}>
        <FormControl p={'3rem'}>
          <ModalCloseButton />
          <VStack>
            <Text fontSize={'2rem'} fontWeight={'semibold'}>
              {btnText}
            </Text>
            {wantLogin ? <LoginForm /> : <SignUpForm />}
            <Button
              w={'100%'}
              borderRadius={'3rem'}
              color={color.textIcon}
              bgColor={color.login}
              _hover={{ bgColor: color.loginSecondary }}
              onClick={wantLogin ? onSignIn : onSignUp}
            >
              {btnText}
            </Button>
            <Text textAlign={'center'} fontSize={'sm'}>
              {wantLogin ? 'Do you want to join?' : 'Already a member?'}
              <Text
                color={color.accent}
                textDecorationLine={"underline"}
                cursor={"pointer"}
                onClick={wantLogin ? onWantSignUp : onWantSignIn}
              >
                {memberText}
              </Text>
            </Text>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
}

export default ModalSignIn;
