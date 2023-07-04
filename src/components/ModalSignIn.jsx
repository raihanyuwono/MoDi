import {
  Button,
  FormControl,
  HStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import LoginForm from './details/LoginForm';
import SignUpForm from './details/SignUpForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../storage/AuthReducer';
import { useNavigate } from 'react-router-dom';
import { forgotPass, register } from '../api/UserApi';
import ForgotPasswordForm from './details/ForgotPasswordForm';

function whichType(username) {
  if (username.match(/\d+/)) return 'phone';
  if (username.match(/^[\w\.]+@\w+\.\w{2,3}/)) return 'email';
  return 'username';
}

function ModalSignIn({ isOpen, onClose }) {
  const [wantLogin, setWantLogin] = useState(true);
  const [btnText, setBtnText] = useState('Sign In');
  const [memberText, setMemberText] = useState('Sign Up');
  const [wantForgot, setWantForgot] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  function onSignIn() {
    const username = document.getElementById('username').value;
    const loginType = whichType(username);

    const data = {
      username: loginType === 'username' ? username : '',
      email: loginType === 'email' ? username : '',
      phone: loginType === 'phone' ? username : '',
      password: document.getElementById('password').value,
    };

    dispatch(login(data));
    navigate('/');
    onClose();
  }

  async function onSignUp() {
    const data = {
      username: document.getElementById('username')?.value,
      email: document.getElementById('email')?.value,
      phone: document.getElementById('phone')?.value,
      password: document.getElementById('password')?.value,
      confirmPassword: document.getElementById('confirm-password')?.value,
    };

    const status = await register(toast, data);
    status && onClose();
  }

  function onForgotPass() {
    const email = document.getElementById('email').value;
    forgotPass(toast, email);
  }

  function onWantSignIn() {
    setWantLogin(true);
    setWantForgot(false);
    setBtnText('Sign In');
    setMemberText('Sign Up');
  }

  function onWantSignUp() {
    setWantLogin(false);
    setWantForgot(false);
    setBtnText('Sign Up');
    setMemberText('Sign In');
  }

  function onWantForgotPass() {
    setWantForgot(true);
    setWantLogin(false);
    setBtnText('Forget Password');
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(2px)'} />
      <ModalContent m={'auto'}>
        <form>
          
        </form>
        <FormControl p={'3rem'}>
          <ModalCloseButton />
          <VStack>
            <Text fontSize={'2rem'} fontWeight={'semibold'}>
              {btnText}
            </Text>
            {wantForgot ? (
              <ForgotPasswordForm />
            ) : wantLogin ? (
              <LoginForm />
            ) : (
              <SignUpForm />
            )}

            {!wantForgot && (
              <HStack>
                <Text fontSize={'sm'}>Forgot your password?</Text>
                <Text
                  fontSize={'sm'}
                  color="accent"
                  cursor={'pointer'}
                  onClick={onWantForgotPass}
                >
                  Click Here
                </Text>
              </HStack>
            )}

            <Button
              type='sumbit'
              w={'100%'}
              borderRadius={'3rem'}
              color={'primaryTextIcon'}
              bgColor={'login'}
              _hover={{ bgColor: 'loginSecondary' }}
              onClick={
                wantForgot ? onForgotPass : wantLogin ? onSignIn : onSignUp
              }
            >
              {btnText}
            </Button>

            <Text textAlign={'center'} fontSize={'sm'}>
              {wantLogin ? 'Do you want to join?' : 'Already a member?'}
            </Text>

            <Text
              color={'accent'}
              fontSize={'sm'}
              textDecorationLine={'underline'}
              cursor={'pointer'}
              onClick={wantLogin ? onWantSignUp : onWantSignIn}
            >
              {memberText}
            </Text>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
}

export default ModalSignIn;
