import { FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';

function LoginForm() {
  return (
    <>
      <CustomInputForm
        id="username"
        type="text"
        placeholder="Username/Email/Phone"
        icon={<FiUser color={"primaryTextIcon"} />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        icon={<FiUnlock color={"primaryTextIcon"} />}
      />
    </>
  );
}

export default LoginForm;
