import { Text, Flex } from '@chakra-ui/react';
import { GiBookAura } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

function NavLeft() {
  const navigate = useNavigate();

  return (
    <Flex
      gap={2}
      alignItems={'center'}
      cursor={'pointer'}
      onClick={() => navigate('/')}
    >
      <GiBookAura size={'2.5rem'} />
      <Text
        fontFamily={'Fira Code'}
        color={'primaryTextIcon'}
        fontSize={'xl'}
        fontWeight={'semibold'}
      >
        MoDi
      </Text>
    </Flex>
  );
}

export default NavLeft;
