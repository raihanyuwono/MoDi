import {
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InputTags from './InputTags';
import { getCategory } from '../../api/BlogApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function WriteForm() {
  const [imgURL, setImgURL] = useState('');
  const [categories, SetCategories] = useState([]);

  async function fetchCategory() {
    const data = await getCategory();
    SetCategories(data);
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  function onAddImg() {
    try {
      const [file] = document.getElementById('write-img').files;
      const imgURL = URL.createObjectURL(file);
      setImgURL(imgURL);
    } catch (error) {
      console.log(error);
    }
  }

  const validFileExtensions = {
    image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
  };

  const MAX_FILE_SIZE = 1048576;

  function isValidFileType(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
    );
  }

  const writeSchema = {
    'write-title': Yup.string()
      .max(40, 'max. 40 character')
      .required('required'),
    'write-category': Yup.string().required('required'),
    'write-content': Yup.string()
      .max(200, 'max. 200 character')
      .required('required'),
    'write-img': Yup.mixed()
      .test('is-valid-type', 'Not a valid type', value =>
        isValidFileType(value && value.name.toLowerCase(), 'image')
      )
      .test(
        'is-valid-sixe',
        'Max allowed size is 1MB',
        value => value && value.size <= MAX_FILE_SIZE
      ),
  };

  const initialValues = {
    'write-title': '',
    'write-category': '',
    'write-content': '',
    'wtite-img': null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape(writeSchema),
  });

  function handleOnChange(event) {
    const { target } = event;
    if (target.id === 'write-img') {
      formik.setFieldValue(target.id, target.files[0]);
      onAddImg();
      console.log(target.files[0].size, target.files[0]);
    } else formik.setFieldValue(target.id, target.value);
  }

  return (
    <Flex direction={'column'} w={'full'} minH={'calc(100vh - 4rem)'} gap={5}>
      <FormControl isInvalid={formik.errors['write-title']}>
        <Input
          id={'write-title'}
          type={'text'}
          w={'full'}
          h={'4rem'}
          borderColor={'lightPrimary'}
          fontSize={'2rem'}
          color={'primaryText'}
          required
          placeholder={'Title...'}
          _placeholder={{ color: 'secondaryText' }}
          onChange={handleOnChange}
          focusBorderColor="lightPrimary"
        />
        <FormErrorMessage>{formik.errors['write-title']}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors['write-category']}>
        <Select
          id="write-category"
          placeholder="Category"
          borderColor={'lightPrimary'}
          focusBorderColor="lightPrimary"
          color={'primaryText'}
          onChange={handleOnChange}
        >
          {categories.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </Select>
        <FormErrorMessage>{formik.errors['write-category']}</FormErrorMessage>
      </FormControl>

      <InputTags id={'write-tags'} />

      <FormControl isInvalid={formik.errors['write-content']}>
        <Textarea
          id="write-content"
          type={'text'}
          w={'full'}
          h={'50vh'}
          borderColor={'lightPrimary'}
          fontSize={'1.25rem'}
          color={'primaryText'}
          required
          placeholder={'Tell your story here...'}
          _placeholder={{ color: 'secondaryText' }}
          focusBorderColor="lightPrimary"
          onChange={handleOnChange}
        />
        <FormErrorMessage>{formik.errors['write-content']}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors['write-img']}>
        <Flex direction={'row'} alignItems={'baseline'}>
          <Text w={'4rem'} mb={'0.5rem'}>
            Image :
          </Text>
          <Input
            id="write-img"
            type="file"
            flexGrow={1}
            variant={'unstyled'}
            onChange={handleOnChange}
          />
        </Flex>
        <FormErrorMessage>{formik.errors['wtite-img']}</FormErrorMessage>
        <Image
          id="write-preview-image"
          src={imgURL}
          alt={imgURL}
          w={'full'}
          borderRadius={'10px'}
          boxShadow={'lg'}
          objectFit={'cover'}
          objectPosition={'center'}
        />
      </FormControl>
    </Flex>
  );
}

export default WriteForm;
