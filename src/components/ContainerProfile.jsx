import {
  Avatar,
  Button,
  Flex,
  Grid,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMail, FiPhone, FiUnlock, FiUser } from 'react-icons/fi';
import UserInfo from './details/UserInfo';
import ModalChangePhoto from './details/ModalChangePhoto';
import { useSelector } from 'react-redux';
import AvatarUser from './details/AvatarUser';

function ContainerProfile() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {user} = useSelector((state) => state.auth);

  return (
    <Flex
      bgColor={'primary'}
      h={'60vh'}
      w={'60%'}
      minW={'fit-content'}
      px={5}
      borderRadius={'10px'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      fontFamily={'Fira Code'}
      gap={3}
    >
      <VStack>
        <AvatarUser size={'2xl'}/>
        <Button w={'auto'} h={'2.125rem'} px={2} onClick={onOpen}>
          Change Photo
        </Button>
        <ModalChangePhoto isOpen={isOpen} onClose={onClose} />
      </VStack>
      <Grid
        flexGrow={1}
        templateColumns={'1fr 6fr 1fr'}
        templateRows={'repeat(3, 1fr)'}
        rowGap={2}
      >
        <UserInfo
          logo={<FiUser />}
          keyProp={'username'}
          type="text"
          placeholder={'Username'}
        />
        <UserInfo
          logo={<FiMail />}
          keyProp={'email'}
          type="email"
          placeholder={'Email'}
        />
        <UserInfo
          logo={<FiPhone />}
          keyProp={'phone'}
          type="tel"
          placeholder={'Phone'}
        />
        <UserInfo
          logo={<FiUnlock />}
          keyProp={'password'}
          type="password"
          placeholder={'Password'}
        />
      </Grid>
    </Flex>
  );
}

export default ContainerProfile;
