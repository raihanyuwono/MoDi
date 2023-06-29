import {
  Flex,
  FormControl,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InputTags from './InputTags';
import { getCategory } from '../../api/BlogApi';

function WriteForm() {
  const [imgURL, setImgURL] = useState('');
  const [categories, SetCategories] = useState([]);

  async function fetchCategory(){
    const data = await getCategory();
    SetCategories(data);
  }

  useEffect(() => {
    fetchCategory();
  }, [])

  function onAddImg() {
    try{
      const [file] = document.getElementById('write-img').files;
      const imgURL = URL.createObjectURL(file);
      setImgURL(imgURL);
    } catch(error){
      console.log(error);
    }
  }

  return (
    <Flex direction={'column'} w={'full'} minH={'calc(100vh - 4rem)'} gap={5}>
      <FormControl>
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
          focusBorderColor="lightPrimary"
        />
      </FormControl>

      <FormControl>
        <Select
          id="write-category"
          placeholder="Category"
          borderColor={'lightPrimary'}
          focusBorderColor="lightPrimary"
          color={'primaryText'}
        >
          {categories.map((item, index) => {
            if (index > 0)
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
          })}
        </Select>
      </FormControl>

      <InputTags id={'write-tags'} />

      <FormControl>
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
        />
      </FormControl>

      <FormControl>
        <Flex direction={'row'} alignItems={'baseline'}>
          <Text w={'4rem'} mb={'0.5rem'}>
            Image :
          </Text>
          <Input
            id="write-img"
            type="file"
            flexGrow={1}
            variant={'unstyled'}
            onChange={onAddImg}
          />
        </Flex>
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
