import { Button, useDisclosure } from '@chakra-ui/react';
import ModalSignIn from '../ModalSignIn';

function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={'solid'}
      id='login-button'
      color={"primaryTextIcon"} 
      bgColor={"accent"}
      _hover={{bgColor: "accentSecondary"}}
      onClick={onOpen}>
        Sign In
      </Button>
      <ModalSignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default LoginButton;
