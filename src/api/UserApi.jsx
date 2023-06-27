import axios from 'axios';
import Toast from '../components/Toast';

const API_BASE_URL = 'https://minpro-blog.purwadhikabootcamp.com';
const FE_URL = 'http://localhost:3000';

async function register(toast, data) {
  try {
    data = {
      ...data,
      FE_URL,
    };

    const res = await axios.post(`${API_BASE_URL}/api/auth/`, data);

    console.log(res);
    Toast(toast, {
      title: res.data.message,
      status: res.status,
    });

    return true;
  } catch (error) {
    Toast(toast, {
      title: error.response.data,
      status: error.response.status,
    });
    return false;
  }
}

async function verify(toast, token) {
  try {
    const res = await axios.patch(
      `${API_BASE_URL}/api/auth/verify`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Toast(toast, {
      title: res.data.message,
      status: res.status,
    });

    return true;
  } catch (error) {
    Toast(toast, {
      title: 'Token has expired',
      status: error.response.status,
    });
    return false;
  }
}

async function forgotPass(toast, email) {
  try {
    const res = await axios.put(`${API_BASE_URL}/api/auth/forgotPass`, {
      email,
      FE_URL,
    });
    console.log(res);
    Toast(toast, {
      title: res.data.message,
      status: res.status,
    });
  } catch (error) {
    console.log(error);
    Toast(toast, {
      title: error.response.data,
      status: error.response.status,
    });
  }
}

async function resetPassword(toast, { token, password, confirmPassword }) {
  try {
    const res = await axios.patch(
      `${API_BASE_URL}/api/auth/resetPass`,
      {
        password,
        confirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Reset Success', res);
    Toast(toast, {
      title: res.data.message,
      status: res.status,
    });
    return true;
  } catch (error) {
    console.log('Reset Failed', error);
    Toast(toast, {
      title: 'Token has expired',
      status: error.response.status,
    });
    return false;
  }
}

export { register, verify, forgotPass, resetPassword };
