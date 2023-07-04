import { Flex } from '@chakra-ui/react';
import { BsBookmark } from 'react-icons/bs';
import {FaScroll} from 'react-icons/fa';
import WriteButton from './WriteButton';
import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';
import UserDropdown from './UserDropdown';
import { useNavigate } from 'react-router-dom';

function NavRight() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();

  function toBoookmark(){
    navigate('/bookmark');
  }

  function toWritten(){
    navigate('/written');
  }

  if (isLogin)
    return (
      <Flex direction={'row'} alignItems={'center'} gap={3}>
        <WriteButton />
        <BsBookmark color={"primaryTextIcon"} size={'1.4rem'} cursor={'pointer'} onClick={toBoookmark} />
        <FaScroll color={"primaryTextIcon"} size={'1.4rem'} cursor={'pointer'} onClick={toWritten}/>
        {/* <RiNotificationLine color={"primaryTextIcon"} size={'1.4rem'} /> */}
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
