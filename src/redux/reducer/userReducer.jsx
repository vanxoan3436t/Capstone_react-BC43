//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http, getStorageJSON, saveStorageJSON, USER_LOGIN, USER_UPDATE } from '../../util/config';
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
  userProfile: {

  },
  userUpdate: {
    email: '',
    password: '',
    name: '',
    gender: '',
    phone: '',
  }
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
    }, postUpdate: (state, action) => {
      const userUpdate = action.payload;
      state.userUpdate = userUpdate;
    }
  }
});

export const { loginAction, getProfileAction, postUpdate} = userReducer.actions

export default userReducer.reducer

//----------action gọi api -------\

export const loginActionApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const res = await http.post(`/api/Users/signin`, userLogin);
      const action = loginAction(res.data.content);
      console.log('action.payload', action?.payload)
      dispatch(action);
      saveStorageJSON(USER_LOGIN, res.data.content)
      history.push('/profile')
    } catch (err) {
        swal({
          title:err.response?.data?.message,
          icon:'warning',
          timer:2000,
        });
      
    }
  }
}

export const profileActionApi = (userUpdate) => {
  return async (dispatch) => {
    try {
      const res = await http.post(`/api/Users/updateProfile`, userUpdate);
      const action = postUpdate(res.data.content);
      //const action = {type:'userReducer/loginAction', payload: res.data.content}
      dispatch(action);
      // thành công thì lưu vào local 
      saveStorageJSON(USER_LOGIN, res.data.content)
    } catch (err) {
        swal({
          title:err.response.data?.message,
          icon:'success',
          timer:2000,
        });
      
    }
  }
}

export const getProfileActionApi = () => {
  return async (dispatch, getState) => {

    const accessToken = getState().userReducer.userLogin.accessToken;
    //Gọi api getprofile
    const res = await http.post(`/api/Users/getProfile`, {}, {
      headers: {// headers (tham số thứ 3)
        Authorization: `Bearer ${accessToken}`
      }
    });

    const action = getProfileAction(res);
    dispatch(action);

  }
}
