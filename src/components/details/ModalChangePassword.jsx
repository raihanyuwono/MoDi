import {
  Button,
  FormControl,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import CustomInputForm from './CustomInputForm';
import { FiUnlock } from 'react-icons/fi';
import { changePassword } from '../../api/UserApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../storage/AuthReducer';

function ModalChangePassword({ isOpen, onClose }) {
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onChangePass() {
    const data = {
      currentPassword: document.getElementById('edit-current-password').value,
      password: document.getElementById('edit-password').value,
      confirmPassword: document.getElementById('edit-confirm-password').value,
    };

    await changePassword(toast, data);
    dispatch(logoutSuccess());
    navigate('/');
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(2px)'} />
      <ModalContent>
        <FormControl p={'3rem'}>
          <ModalCloseButton />
          <VStack>
            <Text fontSize={'2rem'} fontWeight={'semibold'}>
              Change Password
            </Text>
            <CustomInputForm
              id="edit-current-password"
              type="password"
              placeholder="Current Password"
              pass={showCurrentPass}
              onPass={() => setShowCurrentPass(!showCurrentPass)}
              icon={<FiUnlock color={'primaryTextIcon'} />}
            />
            <CustomInputForm
              id="edit-password"
              type="password"
              placeholder="New Password"
              pass={showPass}
              onPass={() => setShowPass(!showPass)}
              icon={<FiUnlock color={'primaryTextIcon'} />}
            />
            <CustomInputForm
              id="edit-confirm-password"
              type="password"
              placeholder="Re-type New Password"
              pass={showPassConfirm}
              onPass={() => setShowPassConfirm(!showPassConfirm)}
              icon={<FiUnlock color={'primaryTextIcon'} />}
            />
            <Button
              w={'100%'}
              borderRadius={'3rem'}
              color={'primaryTextIcon'}
              bgColor={'login'}
              onClick={onChangePass}
              _hover={{ bgColor: 'loginSecondary' }}
            >
              Change Password
            </Button>
          </VStack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
}

export default ModalChangePassword;
