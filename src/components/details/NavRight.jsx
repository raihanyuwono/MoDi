import { Flex } from '@chakra-ui/react';
import { RiNotificationLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import WriteButton from './WriteButton';
import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';
import UserDropdown from './UserDropdown';

function NavRight() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (isLogin)
    return (
      <Flex direction={'row'} alignItems={'center'} gap={3}>
        <WriteButton />
        <BsBookmark color={"primaryTextIcon"} size={'1.4rem'} />
        <RiNotificationLine color={"primaryTextIcon"} size={'1.4rem'} />
        <UserDropdown />
      </Flex>
    );

  return (
    <Flex direction={'row'} alignItems={'center'} gap={2}>
      <WriteButton isWrite={true}/>
      <LoginButton />
    </Flex>
  );
}

export default NavRight;
