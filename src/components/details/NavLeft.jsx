import { Text, Flex } from '@chakra-ui/react';
import { GiBookAura } from 'react-icons/gi';
import { color } from '../../themes/Themes';

function NavLeft() {
  return (
    <Flex gap={2} alignItems={'center'}>
      <GiBookAura size={'2.5rem'} />
      <Text
        fontFamily={'Fira Code'}
        color={color.textIcon}
        fontSize={'xl'}
        fontWeight={'semibold'}
      >
        MoDi
      </Text>
    </Flex>
  );
}

export default NavLeft;
