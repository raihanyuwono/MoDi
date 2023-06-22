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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userLogin } from '../storage/UserReducer';

function whichType(username) {
  if (username.match(/\d+/)) return "phone";
  if (username.match(/^[\w\.]+@\w+\.\w{2,3}/)) return "email";
  return "username";
}

function ModalSignIn({ isOpen, onClose }) {
  const [wantLogin, setWantLogin] = useState(true);
  const [btnText, setBtnText] = useState('Sign In');
  const [memberText, setMemberText] = useState('Sign Up');
  const dispatch = useDispatch();
  
  async function onSignIn() {
    try {
      const username = document.getElementById("username").value;
      const loginType = whichType(username);
      console.log(loginType);

      const data = {
        username: loginType === "username" ? username : '',
        email: loginType === "email" ? username : '',
        phone: loginType === "phone" ? username : '',
        password: document.getElementById("password").value,
      };

      const res = await axios.post(
        'https://minpro-blog.purwadhikabootcamp.com/api/auth/login',
        data
      );

      // console.log(res);
      const token = res.data.token;
      // console.log(token);
        dispatch(userLogin(token));

      // const userPhoto = res.data.isAccountExist.imgProfile;
    } catch (error) {
      alert(error);
    }
  }

  async function onSignUp() {
    try {
      const data = {
        username: document.getElementById('username')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        password: document.getElementById('password')?.value,
        confirmPassword: document.getElementById('confirm-password')?.value,
      };

      const res = await axios.post(
        'https://minpro-blog.purwadhikabootcamp.com/api/auth/',
        data
      );

      // console.log(res);
      alert(res.data.message);
    } catch (error) {
      // console.log(error)
      alert(error.response.data);
    }
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
    <Modal isOpen={isOpen} onClose={onClose}>
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
              color={'primaryTextIcon'}
              bgColor={'login'}
              _hover={{ bgColor: 'loginSecondary' }}
              onClick={wantLogin ? onSignIn : onSignUp}
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
