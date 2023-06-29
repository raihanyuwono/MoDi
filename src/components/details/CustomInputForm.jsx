import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import * as Yup from 'yup';

function CustomInputForm({ id, type, placeholder, icon, pass, onPass }) {
  function rightPassword() {
    function showPassword() {
      onPass();
      if (!pass) document.getElementById(id).type = 'text';
      else document.getElementById(id).type = 'password';
    }

    if (type === 'password')
      return (
        <InputRightElement>
          {pass ? (
            <FiEye onClick={showPassword} cursor={'pointer'} />
          ) : (
            <FiEyeOff onClick={showPassword} cursor={'pointer'} />
          )}
        </InputRightElement>
      );
  }

  function whichSchema() {
    const schema = {};
    switch (type) {
      case 'email':
        schema[id] = Yup.string().email('invalid format').required('required');
        break;
      case 'tel':
        schema[id] = Yup.string()
          .matches(/^08\d{8,11}$/, 'invalid Phone format')
          .required('required');
        break;
      case 'password':
        if (id.match(/confirm/)) {
          let ref = id.split('-');
          ref.splice(id.match(/confirm/).index, 1);
          ref = ref.join('-');
          schema[id] = Yup.string()
            .oneOf(
              [document.getElementById(ref)?.value, null],
              'Password must be same'
            )
            .required('required');
        } else
          schema[id] = Yup.string()
            .min(8, 'must be at least 8 characters')
            .matches(/[A-Z]+/, 'at least 1 uppercase')
            .matches(/\d+/, 'at least 1 number')
            .matches(/\W+/, 'at least 1 special character')
            .required('required');
        break;
      default:
        if (id === 'username')
          schema[id] = Yup.string()
            .min(6, 'must be at least 6 characters')
            .required('required');
        break;
    }
    return schema;
  }

  function handleOnChange(event) {
    const { target } = event;
    formik.setFieldValue(target.id, target.value);
  }

  const initialValues = {};
  initialValues[id] = '';

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape(whichSchema()),
  });

  return (
    <FormControl isInvalid={formik.errors[id]}>
      <VStack>
        <InputGroup
          border={'1px solid'}
          borderColor={'divider'}
          borderRadius={'3rem'}
          overflow={'hidden'}
        >
          <InputLeftElement bgColor={'divider'} pointerEvents={'none'}>
            {icon}
          </InputLeftElement>
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            border={'none'}
            pl={'3rem'}
            onChange={handleOnChange}
          />
          {rightPassword()}
        </InputGroup>
        <FormErrorMessage>{formik.errors[id]}</FormErrorMessage>
      </VStack>
    </FormControl>
  );
}

export default CustomInputForm;
