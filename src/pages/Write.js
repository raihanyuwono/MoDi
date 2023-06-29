import ContainerWrite from '../components/ContainerWrite';
import Toast from '../components/Toast';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Write() {
  const isLogin = localStorage.getItem('token');
  const toast = useToast();
  const navigate = useNavigate();
  if (!isLogin) {
    Toast(toast, {
      title: 'You have to Login first',
      status: 4,
    });
    return setTimeout(() => navigate('/'), 500);
  }
  return (
    <>
      <ContainerWrite />
    </>
  );
}

export default Write;
