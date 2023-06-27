import { Button, GridItem, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function UserInfo({ logo, keyProp, type, placeholder }) {
  const { user } = useSelector(state => state.auth);
  const [isEdit, setEdit] = useState(false);
  
  function onEdit() {
    if(!isEdit) return setEdit(true);
    const value = document.getElementById(`edit-${keyProp}`).value;
    if(value === "") return setEdit(false);
    
  }
  
  return (
    <>
      <GridItem fontSize={'1.5rem'} color={'primaryTextIcon'}>
        {logo}
      </GridItem>
      <GridItem>
        {!isEdit ? (
          <Text color={'primaryTextIcon'}>{user[keyProp]}</Text>
        ) : (
          <Input
            id={`edit-${keyProp}`}
            type={type}
            variant={'flushed'}
            h={'1.25rem'}
            color={'primaryTextIcon'}
            placeholder={placeholder}
            _placeholder={{ color: 'inputBorder' }}
          />
        )}
      </GridItem>
      <GridItem>
        <Button w={'auto'} h={'auto'} py={1} px={2} onClick={onEdit}>
          Edit
        </Button>
      </GridItem>
    </>
  );
}

export default UserInfo;
