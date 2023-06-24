import { Flex, FormControl, Input, Textarea } from '@chakra-ui/react';

function WriteForm() {
  return (
    <Flex
      direction={'column'}
      w={'full'}
      h={'full'}
      gap={5}
    >
      <FormControl>
        <Input
          id={'write-title'}
          type={'text'}
          w={'full'}
          h={'4rem'}
          borderColor={"lightPrimary"}
          fontSize={'2rem'}
          color={'primaryText'}
          placeholder={'Title...'}
          _placeholder={{ color: 'secondaryText' }}
        />
      </FormControl>

      <FormControl flex={'1 1 50vh'}>
        <Textarea
          id="write-content"
          type={'text'}
          w={'full'}
          minH={'full'}
          borderColor={"lightPrimary"}
          fontSize={'1.25rem'}
          placeholder={'Tell your story here...'}
          _placeholder={{ color: 'secondaryText' }}
        />
      </FormControl>
      
    </Flex>
  );
}

export default WriteForm;
