import { Button, useDisclosure } from '@chakra-ui/react';
import {color} from "../../themes/Themes"
import ModalSignIn from '../ModalSignIn';

function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={'solid'}
      color={color.textIcon} 
      bgColor={color.accent}
      _hover={{bgColor: color.accentSecondary}}
      onClick={onOpen}>
        Sign In
      </Button>
      <ModalSignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default LoginButton;
