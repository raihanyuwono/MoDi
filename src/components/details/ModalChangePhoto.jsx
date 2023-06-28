import {
  Avatar,
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { changePhotoProfile } from '../../api/UserApi';
import AvatarUser from './AvatarUser';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';

function ModalChangePhoto({ isOpen, onClose }) {
  const toast = useToast();
  const [imgURL, setImgURL] = useState('');

  function onAddImg() {
    try{
      const [file] = document.getElementById('edit-img').files;
      const imgURL = URL.createObjectURL(file);
      setImgURL(imgURL);
    } catch(error){
      console.log(error);
    }
  }

  async function onChangeImg() {
    const file = document.getElementById('edit-img').files[0];
    const isSuccess = await changePhotoProfile(toast, file);
    
    isSuccess && onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(2px)'} />
      <ModalContent>
        <FormControl p={'3rem'}>
          <ModalCloseButton />
          <VStack>
            <Text fontSize={'2rem'} fontWeight={'semibold'}>
              Change Photo
            </Text>

            <HStack fontFamily={'Fira Code'}>
              <VStack>
                <AvatarUser size={'2xl'} />
                <Text>Current</Text>
              </VStack>

              <FaLongArrowAltRight size={'1.75rem'} />

              <VStack>
                <Avatar size={'2xl'} src={imgURL} />
                <Text>New</Text>
              </VStack>
            </HStack>

            <Input id='edit-img' type='file' variant={'flushed'} onChange={onAddImg}/>

            <Button
              w={'100%'}
              borderRadius={'3rem'}
              color={'primaryTextIcon'}
              bgColor={'login'}
              onClick={onChangeImg}
              _hover={{ bgColor: 'loginSecondary' }}
            >
              Change Photo
            </Button>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
}

export default ModalChangePhoto;
