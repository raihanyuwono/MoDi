import { Avatar, Flex } from '@chakra-ui/react';
import { RiNotificationLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import WriteButton from './WriteButton';
import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';

function NavRight() {
  const isLogin = useSelector((state) => state.user.token);
  if (isLogin)
    return (
      <Flex direction={'row'} alignItems={'center'} gap={3}>
        <WriteButton />
        <BsBookmark color={"primaryTextIcon"} size={'1.4rem'} />
        <RiNotificationLine color={"primaryTextIcon"} size={'1.4rem'} />
        <Avatar size={'sm'} />
      </Flex>
    );

  return (
    <Flex direction={'row'} alignItems={'center'} gap={2}>
      <WriteButton />
      <LoginButton />
    </Flex>
  );
}

export default NavRight;
