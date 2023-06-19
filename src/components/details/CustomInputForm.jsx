import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { color } from '../../themes/Themes';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

function CustomInputForm({ id, type, placeholder, icon, pass, onPass }) {

  function rightPassword() {
    
    function showPassword(){
      onPass();
      if(!pass) document.getElementById(id).type = "text";
      else document.getElementById(id).type = "password";
    }
    
    if(type == "password")
    return (
      <InputRightElement>
        {
          pass ? 
          <FiEye onClick={showPassword}/>
          :
          <FiEyeOff onClick={showPassword}/>
        }
      </InputRightElement>
    );
  }

  return (
    <InputGroup
      border={`1px solid ${color.divider}`}
      borderRadius={'3rem'}
      overflow={'hidden'}
    >
      <InputLeftElement bgColor={color.divider} pointerEvents={'none'}>
        {icon}
      </InputLeftElement>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        border={'none'}
        pl={'3rem'}
      />
      {rightPassword()}
    </InputGroup>
  );
}

export default CustomInputForm;
