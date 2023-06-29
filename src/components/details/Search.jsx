import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { BsSearch, BsChevronRight } from 'react-icons/bs';

function Search({funcSearch}) {
  function onChangeSearch() {
    const keySearch = document.getElementById('search').value;
    funcSearch(keySearch);
  }

  return (
    <InputGroup w={'45%'}>
      <InputLeftElement pointerEvents={'none'}>
        <BsSearch color="lightPrimary" />
      </InputLeftElement>
      <Input
        id={'search'}
        type="text"
        color={'primaryTextIcon'}
        placeholder="Search"
        onChange={onChangeSearch}
      />
      <InputRightElement>
        <BsChevronRight color="lightPrimary" />
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;
