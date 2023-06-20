import { FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';
import { color } from '../../themes/Themes';

function LoginForm() {
  return (
    <>
      <CustomInputForm
        id="username"
        type="text"
        placeholder="Username"
        icon={<FiUser color={color.textIcon} />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        icon={<FiUnlock color={color.textIcon} />}
      />
    </>
  );
}

export default LoginForm;
