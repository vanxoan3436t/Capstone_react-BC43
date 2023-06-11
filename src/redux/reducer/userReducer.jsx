//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http, getStorageJSON, saveStorageJSON, USER_LOGIN, USER_UPDATE } from '../../util/config';
import { history } from '../../index';

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

// const getInfoUser =() =>{
// let infoUser = {
// email: '',
// password:'',
// name:'',
// gender:'',
// phone:''
// }
// if (getStorageJSON(USER_LOGIN)) {
//   infoUser = getStorageJSON(USER_LOGIN);
// }
// return infoUser;

// }
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

export const { loginAction, getProfileAction, postUpdate } = userReducer.actions

export default userReducer.reducer

//----------action gọi api -------\

export const loginActionApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const res = await http.post(`/api/Users/signin`, userLogin);
      const action = loginAction(res.data.content);
      dispatch(action);
      // thành công thì lưu vào local 
      saveStorageJSON(USER_LOGIN, res.data.content)

      //SAu khi đăng nhập thành công thì chuyển hướng trang sang profile
      history.push('/profile')


    } catch (err) {
      alert(err.response?.data.message);
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
      alert(err.response?.data.message);
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
