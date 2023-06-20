import { FiMail, FiPhone, FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';
import { color } from '../../themes/Themes';
import { useState } from 'react';

function SignUpForm() {

  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  return (
    <>
      <CustomInputForm
        id="username"
        type="text"
        placeholder="Username"
        icon={<FiUser color={color.textIcon} />}
      />
      <CustomInputForm
        id="email"
        type="email"
        placeholder="Email"
        icon={<FiMail color={color.textIcon} />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        pass={showPass}
        onPass={() => setShowPass(!showPass)}
        icon={<FiUnlock color={color.textIcon} />}
      />
      <CustomInputForm
        id="password-confirm"
        type="password"
        placeholder="Re-type Password"
        pass={showPassConfirm}
        onPass={() => setShowPassConfirm(!showPassConfirm)}
        icon={<FiUnlock color={color.textIcon} />}
      />
      <CustomInputForm
        id="phone"
        type="tel"
        placeholder="Phone"
        icon={<FiPhone color={color.textIcon} />}
      />
    </>
  );
}

export default SignUpForm;
