import { FormControl, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Tags() {
  return <></>;
}

function InputTags(id) {
  const [tags, setTags] = useState([]);

  function onAddTags(data) {
    function clearValue() {
      data.value = '';
    }

    const tag = data.value;
    if (!tag.trim()) return clearValue();
    if (tags.findIndex(item => item == tag.trim()) == -1) setTags([...tags, tag.trim()]);
    clearValue();
    console.log(tags)
  }

  function onKeyDownHandle(data) {
    if (data.key !== 'Enter') return;
    onAddTags(data.target);
  }

  function onChangeHandle() {
    const data = document.getElementById(id);
    const key = data.value[data.value.length - 1];
    if (key != ' ') return;
    onAddTags(data);
  }

  return (
    <FormControl>
      {tags.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
      <Input
        id={id}
        color={'primaryText'}
        onKeyDown={onKeyDownHandle}
        onChange={onChangeHandle}
        placeholder="Add Tags..."
      />
    </FormControl>
  );
}

export default InputTags;
