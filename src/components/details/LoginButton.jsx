import { Button, useDisclosure } from '@chakra-ui/react';
import ModalSignIn from '../ModalSignIn';

function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={'outline'} onClick={onOpen}>
        Sign In
      </Button>
      <ModalSignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default LoginButton;
