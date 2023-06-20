import axios from 'axios';
import { history } from '../index';
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const PRODUCT = 'product'
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
});

export const TOKEN = 'accessToken';

export const httpSearch = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

export const { saveStorageJSON, getStorageJSON, clearStorage } = {
    saveStorageJSON: (name, data) => {//lưu dữ liệu vào local
        const string = JSON.stringify(data);
        localStorage.setItem(name, string);
    },
    getStorageJSON: (name) => {
        if (localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;
    },
    clearStorage: (name) => {//removeItem xoá 
        localStorage.removeItem(name)
    }
}

http.interceptors.request.use((config) => {
    //data (body): (lấy từ các input hoặc tham số từ phía client)
    config.headers = { ...config.headers }
    let token = getStorageJSON(USER_LOGIN)?.accessToken;// ? nếu không có thì trả null thì là chưa đăng nhập
    config.headers.Authorization = `Bearer ${token}`
    return config;

}, (err) => {
    return Promise.reject(err);
})
//Cấu hình cho response (Kết quả trả về từ api)
http.interceptors.response.use((res) => {
    return res;

}, (err) => {
    console.log('err', err)
    //Xử lý lỗi cho api
    if (err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
    }

});