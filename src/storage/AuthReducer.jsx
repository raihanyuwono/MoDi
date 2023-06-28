import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {
    id: null,
    username: '',
    email: '',
    phone: '',
    imgProfile: null,
    role: false,
  },
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, username, email, phone, imgProfile, role } = action.payload;
      state.user = { id, username, email, phone, imgProfile, role };
    },
    loginSuccess: state => {
      state.isLogin = true;
    },
    logoutSuccess: state => {
      state.isLogin = false;
      localStorage.removeItem('token');
    },
    keepLoginSuccess: state => {
      state.isLogin = true;
    },
  },
});

function login(data) {
  return async function (dispatch) {
    try {
      const res = await axios.post(
        'https://minpro-blog.purwadhikabootcamp.com/api/auth/login',
        data
      );
      const token = res.data.token;
      localStorage.setItem('token', token);
      dispatch(loginSuccess());
      dispatch(setUser(res.data.isAccountExist));
    } catch (error) {
      alert(error.response.data.err);
    }
  };
}

function keepLogin() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const res = await axios.get(
          'https://minpro-blog.purwadhikabootcamp.com/api/auth/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setUser(res.data));
        dispatch(keepLoginSuccess());
      }
    } catch (error) {
      console.log(error);
      dispatch(logoutSuccess());
    }
  };
}

export { login, keepLogin };
export const {
  loginSuccess,
  logoutSuccess,
  setUser,
  keepLoginSuccess,
  clearImgSuccess,
} = AuthReducer.actions;
export default AuthReducer.reducer;
