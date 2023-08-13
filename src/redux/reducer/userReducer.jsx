//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http, getStorageJSON, saveStorageJSON, USER_LOGIN } from '../../util/config';
import { history } from '../../index';
import swal from 'sweetalert';

const initStateUserLogin = () => {
  let userLoginInit = {
    email: '',
    accessToken: ''
  }

  if (getStorageJSON(USER_LOGIN)) {
    userLoginInit = getStorageJSON(USER_LOGIN);
  }
  return userLoginInit;
}

const initialState = {
  userLogin: initStateUserLogin(),
  userProfile: {},
 
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const userLogin = action.payload;
      state.userLogin = userLogin;
    }, getProfileAction: (state, action) => {
      const userProfile = action.payload;
      state.userProfile = userProfile;
    },
  }
});

export const { loginAction, getProfileAction } = userReducer.actions

export default userReducer.reducer

//----------action gọi api -------\
export const loginActionApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const res = await http.post(`/api/Users/signin`, userLogin);
      const action = loginAction(res.data.content);
      dispatch(action);
      saveStorageJSON(USER_LOGIN, res.data.content)
      history.push('/')
    } catch (err) {
      swal({
        title: err.response?.data?.message,
        icon: 'warning',
        timer: 2000,
      });
    }
  }
}


export const getProfileActionApi = () => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState().userReducer.userLogin.accessToken;
      //Gọi api getprofile
      const res = await http.post(`/api/Users/getProfile`, {}, {
        headers: {// headers (tham số thứ 3)
          Authorization: `Bearer ${accessToken}`
        }
      });

      const action = getProfileAction(res.data.content);
      dispatch(action);
    } catch (err) {
      if (err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
      }
    }
  }
}
