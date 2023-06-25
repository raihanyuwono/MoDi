import { Flex, FormControl, Image, Input, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import InputTags from './InputTags';

function WriteForm() {
  const [imgURL, setImgURL] = useState('');

  function onAddImg() {
    const [file] = document.getElementById('write-img').files;
    const imgURL = URL.createObjectURL(file);
    setImgURL(imgURL);
    document.getElementById('write-preview-image').style.marginBottom =
      '0.5rem';
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
        />
      </FormControl>

      <InputTags id={"write-tags"}/>

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
        />
      </FormControl>

      <FormControl>
        <Text mb={"0.5rem"}>Image :</Text>
        <Image
          id="write-preview-image"
          src={imgURL}
          alt={imgURL}
          w={'full'}
          borderRadius={"10px"}
          boxShadow={"lg"}
          objectFit={'cover'}
          objectPosition={'center'}
        />
        <Input
          id="write-img"
          type="file"
          flexGrow={1}
          variant={'unstyled'}
          onChange={onAddImg}
        />
      </FormControl>
    </Flex>
  );
}

export default WriteForm;
