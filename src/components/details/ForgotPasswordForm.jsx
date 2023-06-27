import { FiMail } from 'react-icons/fi';
import CustomInputForm from './CustomInputForm';

function ForgotPasswordForm() {
  return (
    <>
      <CustomInputForm
        id="email"
        type="email"
        placeholder="Email"
        icon={<FiMail color={'primaryTextIcon'} />}
      />
    </>
  );
}

export default ForgotPasswordForm;
