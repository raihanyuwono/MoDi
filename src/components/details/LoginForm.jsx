import { FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';

function LoginForm() {
  const iconColor = '#FFFFFF';
  return (
    <>
      <CustomInputForm
        id="username"
        type="text"
        placeholder="Username"
        icon={<FiUser color={iconColor} />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        icon={<FiUnlock color={iconColor} />}
      />
    </>
  );
}

export default LoginForm;
