import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiQuillPenLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WriteButton() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const [isWrite, setIsWrite] = useState(false);
  const navigate = useNavigate();

  function navToWrite() {
    if (isLogin) {
      sessionStorage.removeItem('tags');
      return navigate('/write');
    }
    const logButton = document.getElementById('login-button');
    logButton.click();
  }

  async function onPublish() {
    const submitButton = document.getElementById('write-submit');
    submitButton.click();
  }

  useEffect(() => {
    const url = window.location.href;
    const writing = url.match(/\/write/) ? true : false;
    setIsWrite(writing);
  });

  return (
    <>
      <Button
        leftIcon={<RiQuillPenLine />}
        variant={'outline'}
        color={'primaryTextIcon'}
        borderColor={'login'}
        fontSize={'0.85rem'}
        onClick={isWrite ? onPublish : navToWrite}
        _hover={{ bgColor: 'loginSecondary' }}
      >
        {isWrite && isLogin ? 'Publish' : 'Write'}
      </Button>
    </>
  );
}

export default WriteButton;
