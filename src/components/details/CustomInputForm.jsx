import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

function CustomInputForm({ id, type, placeholder, icon}) {
  const borderColor = '#BBBBBB';
  return (
    <InputGroup
      border={`1px solid ${borderColor}`}
      borderRadius={'3rem'}
      overflow={'hidden'}
    >
      <InputLeftElement bgColor={borderColor} pointerEvents={'none'}>
        {icon}
      </InputLeftElement>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        border={'none'}
        pl={'3rem'}
      />
    </InputGroup>
  );
}

export default CustomInputForm;
