//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http, getStorageJSON, saveStorageJSON, USER_LOGIN } from '../../util/config';
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


const initialState = {
  userLogin: initStateUserLogin(),
  userProfile: {

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
    }
  }
});

export const { loginAction ,getProfileAction} = userReducer.actions

export default userReducer.reducer

//----------action gọi api -------\

export const loginActionApi = (userLogin) => { //userLogin = {email:'',password:''}

  return async (dispatch) => {// dispatch nghĩa là gửi đi
    try {// try catch để bắt lỗi
      const res = await http.post(`/api/Users/signin`, userLogin);//tham số 2 là object userLogin tương đương với format data của API  ,API nó yêu cầu email và password thì phải đưa đúng thuộc tính của email và password
      //Sau khi kết quả trả về sẽ đưa lên loginAction
      const action = loginAction(res.data.content);
      //const action = {type:'userReducer/loginAction', payload: res.data.content}
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