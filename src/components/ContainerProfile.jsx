import { Avatar, Flex, Grid } from '@chakra-ui/react';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import UserInfo from './details/UserInfo';

function ContainerProfile() {
  return (
    <Flex
      bgColor={'primary'}
      h={'60vh'}
      w={'60%'}
      px={5}
      borderRadius={'10px'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      fontFamily={'Fira Code'}
      gap={3}
    >
      <Avatar size={'2xl'} />
      <Grid
        flexGrow={1}
        templateColumns={'1fr 6fr 1fr'}
        templateRows={'repeat(3, 1fr)'}
        rowGap={2}
      >
        <UserInfo
          logo={<FiUser />}
          keyProp={'username'}
          type="text"
          placeholder={'Username'}
        />
        <UserInfo
          logo={<FiMail />}
          keyProp={'email'}
          type="email"
          placeholder={'Email'}
        />
        <UserInfo
          logo={<FiPhone />}
          keyProp={'phone'}
          type="tel"
          placeholder={'Phone'}
        />
      </Grid>
    </Flex>
  );
}

export default ContainerProfile;
