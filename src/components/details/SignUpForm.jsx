import { FiMail, FiPhone, FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';
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
        icon={<FiUser color={"primaryTextIcon"} />}
      />
      <CustomInputForm
        id="email"
        type="email"
        placeholder="Email"
        icon={<FiMail color={"primaryTextIcon"} />}
      />
      <CustomInputForm
        id="phone"
        type="tel"
        placeholder="Phone"
        icon={<FiPhone color={"primaryTextIcon"} />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        pass={showPass}
        onPass={() => setShowPass(!showPass)}
        icon={<FiUnlock color={"primaryTextIcon"} />}
      />
      <CustomInputForm
        id="confirm-password"
        type="password"
        placeholder="Re-type Password"
        pass={showPassConfirm}
        onPass={() => setShowPassConfirm(!showPassConfirm)}
        icon={<FiUnlock color={"primaryTextIcon"} />}
      />
    </>
  );
}

export default SignUpForm;
