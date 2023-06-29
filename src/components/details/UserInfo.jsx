import {
  Button,
  GridItem,
  Input,
  Text,
  useToast,
  useDisclosure,
  FormControl,
  Box,
  FormErrorMessage,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changePhone, changeUsername } from '../../api/UserApi';
import { logoutSuccess } from '../../storage/AuthReducer';
import { useNavigate } from 'react-router-dom';
import ModalChangePassword from './ModalChangePassword';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    // if (!isEdit) return setEdit(true);
    // const value = document.getElementById(`edit-${keyProp}`).value;
    // if (value === '') return setEdit(false);
    // onChangeContent();
    setEdit(!isEdit);
  }

  function whichSchema() {
    const schema = {};
    switch (keyProp) {
      case 'email':
        schema[`edit-${keyProp}`] = Yup.string()
          .email('invalid format')
          .required('required');
        break;
      case 'phone':
        schema[`edit-${keyProp}`] = Yup.string()
          .matches(/^08\d{8,11}$/, 'invalid Phone format')
          .required('required');
        break;
      default:
        if (keyProp === 'username')
          schema[`edit-${keyProp}`] = Yup.string()
            .min(6, 'at least 6 characters')
            .required('required');
        break;
    }
    return schema;
  }

  const initialValues = {};
  initialValues[`edit-${keyProp}`] = '';

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape(whichSchema()),
    onSubmit: () => onChangeContent(),
  });

  function handleOnChange(event) {
    const { target } = event;
    formik.setFieldValue(target.id, target.value);
  }

  return (
    <>
      <GridItem fontSize={'1.5rem'} color={'primaryTextIcon'}>
        {logo}
      </GridItem>
      <GridItem>
        <FormControl isInvalid={formik.errors[`edit-${keyProp}`]}>
          {!isEdit ? (
            <Text color={'primaryTextIcon'}>
              {keyProp === 'password' ? '********' : user[keyProp]}
            </Text>
          ) : (
            keyProp !== 'password' && (
              <form onSubmit={formik.handleSubmit}>
                <HStack>
                  <Input
                    id={`edit-${keyProp}`}
                    type={type}
                    variant={'flushed'}
                    h={'1.25rem'}
                    color={'primaryTextIcon'}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                    _placeholder={{ color: 'inputBorder' }}
                  />
                  <FormErrorMessage
                    pos={'absolute'}
                    // color={''}
                    zIndex={1}
                    top={-2}
                    right={'3rem'}
                  >
                    {formik.errors[`edit-${keyProp}`]}
                  </FormErrorMessage>
                  <Button
                    type="submit"
                    mr={1}
                    w={'auto'}
                    h={'auto'}
                    py={1}
                    px={2}
                  >
                    OK
                  </Button>
                </HStack>
              </form>
            )
          )}
        </FormControl>
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
        <ModalChangePassword isOpen={isOpen} onClose={onClose} />
      </GridItem>
    </>
  );
}

export default UserInfo;
