import { Button, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiQuillPenLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalSignIn from '../ModalSignIn';
import axios from 'axios';

function WriteButton() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const [isWrite, setIsWrite] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function navToWrite() {
    if (isLogin) return navigate('/write');
    onOpen();
  }

  async function onPublish() {
    function onUploadProgress(event) {
      const percentage = Math.round((100 * event.loaded) / event.total);
      console.log(percentage);
    }
    try {
      const data = {
        title: document.getElementById('write-title').value,
        content: document.getElementById('write-content').value,
        CategoryId: document.getElementById('write-category').value,
        keywords: sessionStorage.getItem('tags').split(',').join(' '),
        // country: "USA",
        // url : "",
      };
      const file = document.getElementById('write-img').files[0];
      // console.log(data, file);

      const dataForm = new FormData();
     
      const temp = new FormData();
      for(let key in data) {
        temp.append(key, data[key]);
      }

      const dataJSON = JSON.stringify(data);
      console.log(dataJSON);

      dataForm.append("data", dataJSON);
      dataForm.append("file", file);
      // console.log(dataForm);
      // console.log(localStorage.getItem("token"));

      const res = await axios.post(
        'https://minpro-blog.purwadhikabootcamp.com/api/blog',
        dataForm,
        {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress,
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
      <ModalSignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default WriteButton;
