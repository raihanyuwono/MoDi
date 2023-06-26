import { Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import CardTag from './CardTag';

function InputTags(id) {
  const [tags, setTags] = useState([]);

  function removeTag(index) {
    const temp = [...tags];
    temp.splice(index, 1);
    setTags(temp);
  }

  function onAddTags(data) {
    function clearValue() {
      data.value = '';
    }

    const tag = data.value;
    if (!tag.trim()) return clearValue();
    if (tags.findIndex(item => item === tag.trim()) === -1)
      setTags([...tags, tag.trim()]);
    clearValue();
    console.log(tags);
  }

  function onKeyDownHandle(data) {
    if (data.target.value === "" && data.key === "Backspace") return removeTag(tags.length - 1);
    if (data.key !== 'Enter') return;
    onAddTags(data.target);
  }

  function onChangeHandle() {
    const data = document.getElementById(id);
    const key = data.value[data.value.length - 1];
    if (key !== ' ') return;
    onAddTags(data);
  }

  return (
    <FormControl
      px={'1rem'}
      py={'0.7rem'}
      border={'1px'}
      borderRadius={'5px'}
      borderColor={'inputBorder'}
    >
      <Flex direction={'row'} gap={1} alignItems={'center'} flexWrap={'wrap'}>
        <CardTag tags={tags} removeTag={removeTag} />

        <Input
          id={id}
          color={'primaryText'}
          onKeyDown={onKeyDownHandle}
          onChange={onChangeHandle}
          placeholder="Add Tags..."
          variant={'unstyled'}
          flexGrow={1}
          flexBasis={'5rem'}
        />
      </Flex>
    </FormControl>
  );
}

export default InputTags;
