import { FiMail, FiPhone, FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';

function SignUpForm() {
  const iconColor = '#ffffff';
  return (
    <>
      <CustomInputForm
        id="username"
        type="text"
        placeholder="Username"
        icon={<FiUser color={iconColor} />}
      />
      <CustomInputForm
        id="email"
        type="email"
        placeholder="Email"
        icon={<FiMail color={iconColor} />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        icon={<FiUnlock color={iconColor} />}
      />
      <CustomInputForm
        id="password-check"
        type="password"
        placeholder="Re-type Password"
        icon={<FiUnlock color={iconColor} />}
      />
      <CustomInputForm
        id="phone"
        type="tel"
        placeholder="Phone"
        icon={<FiPhone color={iconColor} />}
      />
    </>
  );
}

export default SignUpForm;