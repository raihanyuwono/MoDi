import {
  Button,
  GridItem,
  Input,
  Text,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changePhone, changeUsername } from '../../api/UserApi';
import { logoutSuccess } from '../../storage/AuthReducer';
import { useNavigate } from 'react-router-dom';
import ModalChangePassword from './ModalChangePassword';

function UserInfo({ logo, keyProp, type, placeholder }) {
  const { user } = useSelector(state => state.auth);
  const [isEdit, setEdit] = useState(false);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  async function onChangeContent() {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const data = {};
    data[`current${capitalize(keyProp)}`] = user[keyProp];
    data[`new${capitalize(keyProp)}`] = document.getElementById(
      `edit-${keyProp}`
    ).value;
    console.log(data);

    switch (keyProp) {
      case 'username':
        await changeUsername(toast, data);
        break;
      case 'email':
        await changeEmail(toast, data);
        break;
      case 'phone':
        await changePhone(toast, data);
        break;
      default:
        console.log('Nothing want to change');
    }
    setEdit(false);
    dispatch(logoutSuccess());
    navigate('/');
  }

  function onEdit() {
    if (!isEdit) return setEdit(true);
    const value = document.getElementById(`edit-${keyProp}`).value;
    if (value === '') return setEdit(false);
    onChangeContent();
    setEdit(false);
  }

  return (
    <>
      <GridItem fontSize={'1.5rem'} color={'primaryTextIcon'}>
        {logo}
      </GridItem>
      <GridItem>
        {!isEdit ? (
          <Text color={'primaryTextIcon'}>{keyProp === 'password' ? '********' :  user[keyProp]}</Text>
        ) : keyProp !== 'password' && (
          <Input
            id={`edit-${keyProp}`}
            type={type}
            variant={'flushed'}
            h={'1.25rem'}
            color={'primaryTextIcon'}
            placeholder={placeholder}
            _placeholder={{ color: 'inputBorder' }}
          />
        )}
      </GridItem>
      <GridItem>
        <Button
          w={'auto'}
          h={'auto'}
          py={1}
          px={2}
          onClick={keyProp === 'password' ? onOpen : onEdit}
        >
          Edit
        </Button>
        <ModalChangePassword isOpen={isOpen} onClose={onClose}/>
      </GridItem>
    </>
  );
}

export default UserInfo;
